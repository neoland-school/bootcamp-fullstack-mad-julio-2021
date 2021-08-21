import React from "react";
import Header from "../../components/header";
import SectionContainer from "../../components/components-principalPage/sectionContainer";
import "./index.css";

class ContainerPrincipal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <SectionContainer></SectionContainer>
     </React.Fragment>
    );
  }
}

export default ContainerPrincipal;
