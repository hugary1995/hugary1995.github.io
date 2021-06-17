import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos.js";
import { MediaBox } from "react-materialize";

class PhotoGallery extends Component {
  mediaBoxRenderer = ({ photo }) => {
    return (
      <MediaBox>
        <img
          alt=""
          src={photo.src}
          width={photo.width}
          style={{ margin: "2px" }}
        />
      </MediaBox>
    );
  };

  render() {
    return <Gallery photos={photos} renderImage={this.mediaBoxRenderer} />;
  }
}

export default PhotoGallery;
