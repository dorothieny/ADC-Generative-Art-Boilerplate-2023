import React, {useState} from "react";
import * as Tone from 'tone'
import { handleValueChange } from "../../prototype_10/helpers/handleValueChange";
import SC_ToggleButtonSet from "../components/SC_ToggleButtonSet";
import {melody} from "../melody"
import SC_Slider from "../components/SC_Slider";
import SC_Button from "../components/SC_Button";
import Christ from "../components/Christ";

let player
let playerChannel

const Melody = () => {
    let settings = {}
    const [state, setState] = useState(melody)
    
const handleStart = () => {
     player = new Tone.Player("http://localhost:3000/samples/Molitva2.mp3");
     playerChannel = new Tone.Channel(state.channel).toDestination()
        player.chain(playerChannel)

     Tone.loaded().then(() => {
        player.start();
      
    }); 
    player.loop = true;
}
const channelMute = ['Mute', 'Sound']
    return (
        <div className="Container">
            <div className="title-row" style={{flexDirection: "column", alignItems: 'center'}} >
                <h1 className="title" style={{textAlign: "center"}}>
                    Molitva
                </h1>
                <SC_Button 
                handleClick={handleStart}
             />
             <Christ/>
            </div>
        <SC_Slider
          name="Volume"
          min={0}
          max={100}
          step={10}
          value={state.channel.volume}
          property="channelVolume"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { channel: playerChannel})}
        />
        <SC_ToggleButtonSet
          name=""
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: playerChannel})}
        />
         
        </div>
        
    )
}
export default Melody;