import React from "react";
import Container from "./modules/Container";
import Container_1 from "./modules/Container_1";
import Sampler from "./modules/Sampler";
import Melody from './modules/Melody'
import Sampler_2 from "./modules/Sampler_2";
import Sampler_3 from "./modules/Sampler_3";

const Polysynth = () => {
        return (
            <div className={"synth_main"}>
                 <div className="melodies">
                    <div className="melody">
                        <Container />
                    </div>
                    <div className="melody">
                        <Melody />
                    </div>
                    <div className="melody">
                        <Container_1 />
                    </div>
                    
                </div>
                <div className="drums">
                    <div className="drum">
                        <Sampler />
                    </div>
                    <div className="drum">
                        <Sampler_3/>
                    </div>
                    <div className="drum">
                        <Sampler_2 />
                    </div>
                </div>
               
           
            </div>
        )
      
}
export default Polysynth;