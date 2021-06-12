import React, {Component} from "react";
import {Collection, CollectionItem} from "react-materialize";

class Conferences extends Component {
  render() {
    return (
      <div>
        <blockquote
          className="z-depth-1"
          style={{fontSize: "24px", paddingTop: "1px", paddingBottom: "1px"}}
        >
          Conferences
        </blockquote>
        <Collection>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu T., Geelen R., Liu Y., & Dolbow J. E., A New Decomposition to
            Obtain Traction-Free Crack Surfaces in a Cohesive Phase-Field Model
            of Fracture, with Application to Soil Networks, 15th U.S. National
            Congress on Computational Mechanics, Austin, TX. Jul. 28 – Aug. 1,
            2019.
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Lawal I., Shah S., Gonzalez-Madrid M., Hu T., Schwingshackl C. W., &
            Brake M. R. W., The Effect of Non-Flat Interfaces on System
            Dynamics, IMAC-XXXVI, Orlando, FL. Feb. 12 – Feb. 15, 2018.
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Bayly P. V., Hu T., & Dutcher S. K., Models of Axoneme Mechanics and
            Flagellar Oscillations, Dynein 2017 International Workshop, Awaji
            Island, Japan. Oct. 29 – Nov. 1, 2017.
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu T., Dutcher S. K., & Bayly P. V., Steady Dynein Activity Produces
            Dynamic Instability and Wavelike Oscillations in A 9-doublet Finite
            Element Model of Flagella, Biophysical Society 61 st Annual Meeting,
            New Orleans, LA. Feb. 11 – 15, 2017.
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu T., Dutcher S. K., & Bayly P. V., Dynamic Instability and
            Wavelike Oscillations in A 9-doublet Finite Element Model of
            Flagella, International Mechanical Engineering Congress &
            Exposition, Phoenix, AZ. Nov. 11 – 17, 2016.
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu T., Dynamic Instability and Wavelike Oscillations in Finite
            Element Models of Flagella, Motility Research in Progress, Saint
            Louis, MO. Oct 21, 2016.
          </CollectionItem>
        </Collection>
      </div>
    );
  }
}

export default Conferences;
