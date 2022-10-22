import React from "react";
import Container from "./modules/Container";
import Container_1 from "./modules/Container_1";
import Sampler from "./modules/Sampler";

const Polysynth = () => {
        return (
            <div style={{display: 'flex', gap: "32px"}}>
            <Container />
            <Container_1 /> 
            <Sampler />
            </div>
        )
      
}
export default Polysynth;