import React, { Component } from "react";
import { Chip, Icon } from "react-materialize";

const research_interests = {
  "Finite Element Method": "1",
  "Solid Mechanics": "2",
  "Fracture Mechanics": "3",
  "Variational Approaches to Fracture": "4",
  "Uncertainty Quantification": "5",
  "Scalable Parallel Algorithm": "6",
  "Nonlinear Numerical Optimization": "7",
  "Nonlinear Dynamics / Vibration": "8"
};

class ResearchInterests extends Component {
  constructor(props) {
    super(props);
    this.onChipSelect = this.onChipSelect.bind(this);
    this.state = { currentInterest: "Finite Element Method" };
  }

  onChipSelect(e) {
    let title = e.currentTarget.textContent;
    if (this.state.currentInterest !== title)
      this.setState({ currentInterest: title });
  }

  render() {
    return (
      <div>
        <blockquote>
          <h5>
            Research Interests<Icon left>book</Icon>
          </h5>
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
              <Chip key={i} onClick={this.onChipSelect}>
                {title}
              </Chip>
            );
        })}
      </div>
    );
  }
}

export default ResearchInterests;

// <li>Building and evaluating micro-scale finite element models</li>
// <li>Improving building-energy efficiency based on computer simulation</li>
// <li>Topology optimization</li>
// <li>Modal analysis and study of interfacial contact dynamics of nonlinear joints</li>
// <li>Cloud (cluster) computing and parallel computing</li>
// <li>Module-based web/desktop/mobile application development</li>
