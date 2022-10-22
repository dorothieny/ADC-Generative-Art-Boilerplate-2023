import React, {useState} from 'react'
import SC_Button from '../components/SC_Button';
import * as Tone from 'tone'
import { sequence_3Drums, drums_3Settinds } from '../drums_3';
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet';
import SC_Slider from '../components/SC_Slider';
import { handleValueChange } from '../helpers/handleValueChange';
import SC_Knob from '../components/SC_Knob';


let channel_3Drums
let sampler_3
const Sampler_3 = () => {
    const [state, setState] = useState(drums_3Settinds)
    let settings = {}

    const handleStart = () => {
        sampler_3 = new Tone.Sampler(state.sampler);

        channel_3Drums = new Tone.Channel(state.channel).toDestination()
        sampler_3.connect(channel_3Drums)


          
        const part = new Tone.Part((time, note) => {
          sampler_3.triggerAttackRelease(
            note.noteName,
            note.duration,
            time,
            note.velocity
          )
        }, sequence_3Drums.steps).start(0)
    
        part.loopEnd = sequence_3Drums.duration;
        part.loop = true
        Tone.Transport.start()
    } 
    const channelMute = ['Mute', 'Sound']
    return (
        <div className="Container">
        <div className="title-row" >
                <h1 className="title" style={{textAlign: "center"}}>
                  Accent beat
                </h1>
                <SC_Button 
                handleClick={handleStart}
             />
            </div>
       
        <SC_Knob 
          name="Ears"
          min={-1}
          max={1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => {
              handleValueChange(property, value, state, setState, settings = {channel: channel_3Drums})}}
          />
         <SC_Slider
                  name="Volume"
                  min={0}
                  max={100}
                  step={10}
                  value={state.sampler.volume}
                  property="samplerVolume"
                  handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channel_3Drums, sampler: sampler_3})}
                />
      
          <SC_ToggleButtonSet
              name=""
              options={channelMute}
              value={state.channel.mute}
              property="channelMute"
              handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channel_3Drums})}
            />
    </div>
    )
}
export default Sampler_3;