import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos.js";
import { MediaBox } from "react-materialize";

class PhotoGallery extends Component {
  mediaBoxRenderer = ({ photo }) => {
    return (
      <MediaBox key={photo.src}>
        <img alt="" {...photo} style={{ margin: "2px" }} />
      </MediaBox>
    );
  };

  render() {
    return <Gallery photos={photos} renderImage={this.mediaBoxRenderer} />;
  }
}

export default PhotoGallery;
