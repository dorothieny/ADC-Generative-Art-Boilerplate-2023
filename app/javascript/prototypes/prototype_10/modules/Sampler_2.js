import React, {useState} from 'react'
import SC_Button from '../components/SC_Button';
import * as Tone from 'tone'
import { sequence_2Drums, drums_2Settinds } from '../drums_2';
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet';
import SC_Slider from '../components/SC_Slider';
import { handleValueChange } from '../helpers/handleValueChange';
import SC_Knob from '../components/SC_Knob';


let channel_2Drums
let sampler_2

const Sampler_2 = () => {
    const [state, setState] = useState(drums_2Settinds)
    let settings = {}

    const handleStart = () => {
        sampler_2 = new Tone.Sampler(state.sampler);

        channel_2Drums = new Tone.Channel(state.channel).toDestination()
        sampler_2.connect(channel_2Drums)

        const part = new Tone.Part((time, note) => {
            sampler_2.triggerAttackRelease(
              note.noteName,
              note.duration,
              time,
              note.velocity
            )
          }, sequence_2Drums.steps).start(0)
      
          part.loopEnd = sequence_2Drums.duration;
          part.loop = true
          Tone.Transport.start()
    } 
    const channelMute = ['Mute', 'Sound']
    return (
        <div className="Container">
       <div className="title-row" >
                <h1 className="title" style={{textAlign: "center"}}>
                  Beat speader
                </h1>
                <SC_Button 
                handleClick={handleStart}
             />
            </div>
            {/* <SC_Slider
          name="Channel hear"
          min={-1}
          max={1}
          step={0.1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channel_2Drums})}
        /> */}
         <SC_Knob 
          name="Ears"
          min={-1}
          max={1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => {
              handleValueChange(property, value, state, setState, settings = {channel: channel_2Drums})}}
          />
          <SC_Slider
                    name="Volume"
                    min={0}
                    max={100}
                    step={10}
                    value={state.sampler.volume}
                    property="samplerVolume"
                    handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channel_2Drums, sampler: sampler_2})}
                  />
        
         
         <SC_ToggleButtonSet
          name=""
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channel_2Drums})}
        /> 

    </div>
    )
}
export default Sampler_2;