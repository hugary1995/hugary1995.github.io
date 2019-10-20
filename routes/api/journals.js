const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

const validateJournalInput = require("../../validation/journal");

// Load models
const User = require("../../models/User");
const Journal = require("../../models/Journal");

// @route GET api/journals/all
// @desc Get all logged journals
// @access Public
router.get("/all", (req, res) => {
  Journal.find({})
    .then(function(journals) {
      return res.status(200).json(journals);
    })
    .catch(function(error) {
      return res.status(400).send("could not get all journals");
    });
});

// @route POST api/journals/add
// @desc Add journal
// @access Public
router.post("/add/:uid", (req, res) => {
  const { errors, isValid } = validateJournalInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let journal = new Journal(req.body);
  journal.postedBy = req.params.uid;
  journal
    .save()
    .then(journal => {
      User.findById(req.params.uid, function(err, user) {
        if (!user) return res.status(404).send("user not found");
        else user.journals.push(journal.id);
        user
          .save()
          .then(user => {
            return res.status(200).json(user);
          })
          .catch(err => {
            return res.status(400).send("adding journal to user failed");
          });
      });
    })
    .catch(err => {
      return res.status(400).send("creating journal failed");
    });
});

// @route POST api/journals/vote/:uid/:jid
// @desc A user votes for a journal
// @access Public
router.post("/vote/:uid/:jid", (req, res) => {
  let uid = req.params.uid;
  let jid = req.params.jid;
  Journal.findById(jid, function(err, journal) {
    if (!journal) return res.status(404).send("journal not found");
    if (journal.votedBy.includes(uid))
      return res.status(400).send("already voted");
    else journal.votedBy.push(uid);
    journal
      .save()
      .then(journal => {
        User.findById(uid, function(err, user) {
          if (!user) return res.status(404).send("user not found");
          else user.votedFor.push(journal.postedBy);
          user
            .save()
            .then(user => {
              res.status(200).json(user);
            })
            .catch(err => {
              res.status(400).send("vote: adding votedFor failed");
            });
        });
      })
      .catch(err => {
        res.status(400).send("vote: adding votedBy failed");
      });
  });
});

// @route POST api/journals/unvote/:uid/:jid
// @desc A user unvotes for a journal
// @access Public
router.post("/unvote/:uid/:jid", (req, res) => {
  let uid = req.params.uid;
  let jid = req.params.jid;
  Journal.findById(jid, function(err, journal) {
    if (!journal) return res.status(404).send("journal not found");
    else {
      let index = journal.votedBy.indexOf(uid);
      if (index > -1) journal.votedBy.splice(index, 1);
      else return res.status(408).send("internal error");
    }
    journal
      .save()
      .then(journal => {
        User.findById(uid, function(err, user) {
          if (!user) return res.status(404).send("user not found");
          else {
            let index = user.votedFor.indexOf(journal.postedBy);
            if (index > -1) user.votedFor.splice(index, 1);
            else return res.status(408).send("internal error");
          }
          user
            .save()
            .then(user => {
              return res.status(200).json(user);
            })
            .catch(err => {
              return res.status(400).send("vote: deleting votedFor failed");
            });
        });
      })
      .catch(err => {
        return res.status(400).send("vote: deleting votedBy failed");
      });
  });
});

// @route GET api/journals/:jid
// @desc Get journal
// @access Public
router.get("/:jid", (req, res) => {
  Journal.findById(req.params.jid, function(err, journal) {
    if (!journal) return res.status(404).send("journal not found");
    return res.status(200).json(journal);
  });
});

// @route POST api/journals/delete/:jid
// @desc Delete a journal and remove all its votes
// @access Public
router.post("/delete/:jid", (req, res) => {
  Journal.findByIdAndRemove(req.params.jid, function(err, journal) {
    if (!journal) return res.status(404).send("journal not found");
    let votedByUsers = journal.votedBy;
    let postedBy = journal.postedBy;
    // remove journal from the user who posted it
    User.findById(postedBy, function(err, user) {
      if (!user) return res.status(404).send("user not found");
      else {
        let index = user.journals.indexOf(req.params.jid);
        if (index > -1) user.journals.splice(index, 1);
        else return res.status(400).send("internal error");
      }
      user.save().catch(err => {
        return res
          .status(400)
          .send("delete: deleting journal from user journal list failed");
      });
    });
    // remove votedFor from each user who voted for it
    for (var i = 0; i < votedByUsers.length; i++) {
      let votedBy = votedByUsers[i];
      User.findById(votedBy, function(err, user) {
        if (!user) return res.status(404).send("user not found");
        else {
          let index = user.votedFor.indexOf(postedBy);
          if (index > -1) user.votedFor.splice(index, 1);
          else return res.status(400).send("internal error");
        }
        user.save().catch(err => {
          return res
            .status(400)
            .send("delete: deleting journal from user journal list failed");
        });
      });
    }
    return res.status(200).send("delete success");
  });
});

module.exports = router;
