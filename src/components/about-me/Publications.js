import React, {Component} from "react";
import {Collection, CollectionItem} from "react-materialize";

class Publications extends Component {
  render() {
    return (
      <div>
        <blockquote
          className="z-depth-1"
          style={{fontSize: "24px", paddingTop: "1px", paddingBottom: "1px"}}
        >
          Publications
        </blockquote>
        <Collection>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu, T., Guilleminot, J., & Dolbow, J. E. (2020). A phase-field model
            of fracture with frictionless contact and random fracture
            properties: Application to thin-film fracture and soil desiccation.{" "}
            <i>Computer Methods in Applied Mechanics and Engineering</i>, 368,
            113106.{" "}
            <a
              href="https://doi.org/10.1016/j.cma.2020.113106"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Jiang, W., Hu, T., Aagesen, L. K., & Zhang, Y. (2020).
            Three-dimensional phase-field modeling of porosity dependent
            intergranular fracture in UO2.{" "}
            <i>Computational Materials Science</i>, 171, 109269.{" "}
            <a
              href="https://doi.org/10.1016/j.commatsci.2019.109269"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Geelen, R. J., Liu, Y., Hu, T., Tupek, M. R., & Dolbow, J. E.
            (2019). A phase-field formulation for dynamic cohesive fracture.{" "}
            <i>Computer Methods in Applied Mechanics and Engineering</i>, 348,
            680-711.{" "}
            <a
              href="https://doi.org/10.1016/j.cma.2019.01.026"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu, T., & Bayly, P. V. (2018). Finite element models of flagella
            with sliding radial spokes and interdoublet links exhibit
            propagating waves under steady dynein loading. <i>Cytoskeleton</i>,
            75(5), 185-200.{" "}
            <a
              href="https://doi.org/10.1002/cm.21432"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu, T., Dutcher, S. K., & Bayly, P. V. (2017). Steady Dynein
            Activity Produces Dynamic Instability and Wavelike Oscillations in a
            9-Doublet Finite Element Model of Flagella.{" "}
            <i>Biophysical Journal</i>, 112(3), 268a-269a.{" "}
            <a
              href="https://www.cell.com/biophysj/pdf/S0006-3495(16)32487-0.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINK
            </a>
          </CollectionItem>
          <CollectionItem style={{minHeight: "1em"}}>
            Hu, T. and Agarwal, R. K. (2016). Accented Models: Evaluating their
            effectiveness in Building Energy Simulation.{" "}
            <i>
              Mechanical Engineering and Materials Science Independent Study
            </i>
            . 2.{" "}
            <a
              href="https://openscholarship.wustl.edu/mems500/2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINK
            </a>
          </CollectionItem>
        </Collection>
      </div>
    );
  }
}

export default Publications;
