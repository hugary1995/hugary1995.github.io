import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos.js";
import { Modal, Button } from "react-materialize";

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false,
    };
  }

  openLightbox = (event, { photo, index }) => {
    this.setState({ currentImage: index, viewerIsOpen: true });
  };

  closeLightbox = () => {
    this.setState({ viewerIsOpen: false });
  };

  render() {
    return (
      <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Modal
          id="modal"
          actions={[
            <Button
              flat
              modal="close"
              node="button"
              waves="green"
              onClick={this.closeLightbox}
            >
              Close
            </Button>,
          ]}
          fixedFooter
          open={this.state.viewerIsOpen}
          options={{
            dismissible: false,
            preventScrolling: true,
          }}
        >
          <img
            alt=""
            src={photos[this.state.currentImage].src}
            style={{ maxWidth: "100%", margin: "auto" }}
          />
        </Modal>
      </div>
    );
  }
}

export default PhotoGallery;
