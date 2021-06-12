import React, {Component} from "react";
import {Chip} from "react-materialize";

const research_interests = {
  "Finite Element Method":
    "Apply the Finite Element Method to solve generally nonlinear Partial Differential Equations.",
  "Solid Mechanics":
    "Study large deformation with hyperelastic-plastic materials in the context of multiphysics-coupling.",
  "Fracture Mechanics":
    "Study both analytical and numerical solutions to fracture problems for brittle and ductile materials.",
  "Variational Approaches to Fracture":
    "Develop gradient-enhanced damage models, specifically phase-field models, to regularize complex crack geometries.",
  "Uncertainty Quantification":
    "Use non-traditional Monte-Carlo sampling to quantify both qualitatively and quantitatively the uncertainty in quantities of interest.",
  "Mechanical Contact":
    "Improve convergence and numerical stability of contact algorithms using Mortar method, embedded interface, phase-field, etc.",
  "Scalable Parallel Algorithm":
    "Write scalable massively parallel programs on CPU and GPU clusters.",
  "Nonlinear Numerical Optimization":
    "Employ Newton-type, Conjugate Gradient, Jacobian-free, and active  methods to solve nonlinear constraint minimization problems.",
  "Nonlinear Dynamics / Vibration":
    "Study instability-induced vibration problems with beam and truss elements."
};

class ResearchInterests extends Component {
  constructor(props) {
    super(props);
    this.onChipSelect = this.onChipSelect.bind(this);
    this.state = {currentInterest: "Finite Element Method"};
  }

  onChipSelect(e) {
    let title = e.currentTarget.textContent;
    if (this.state.currentInterest !== title)
      this.setState({currentInterest: title});
  }

  render() {
    return (
      <div>
        <blockquote
          className="z-depth-1"
          style={{fontSize: "24px", paddingTop: "1px", paddingBottom: "1px"}}
        >
          Research Interests
        </blockquote>
        <p>{research_interests[this.state.currentInterest]}</p>
        {Object.keys(research_interests).map((title, i) => {
          if (title === this.state.currentInterest)
            return (
              <Chip key={i} className="blue darken-4 white-text">
                {title}
              </Chip>
            );
          else
            return (
              <Chip
                key={i}
                className="hoverable"
                onClick={this.onChipSelect}
                style={{cursor: "pointer"}}
              >
                {title}
              </Chip>
            );
        })}
      </div>
    );
  }
}

export default ResearchInterests;
