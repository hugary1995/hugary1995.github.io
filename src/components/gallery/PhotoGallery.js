import React, {
  Component
} from "react";
import Gallery from "react-photo-gallery";
import {
  photos
} from './photos.js'

class PhotoGallery extends Component {
  render() {
    return (<Gallery photos={photos}/>);
  }
}

export default PhotoGallery;