import React, {useState} from 'react'
import SC_Button from '../components/SC_Button';
import * as Tone from 'tone'
import { sequenceDrums, drumsSettinds} from '../drums';
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet';
import SC_Slider from '../components/SC_Slider';
import { handleValueChange } from '../helpers/handleValueChange';
import SC_Knob from '../components/SC_Knob';


let channelDrums
let sampler
const Sampler = () => {
    const [state, setState] = useState(drumsSettinds)
    let settings = {}

    const handleStart = () => {
        sampler = new Tone.Sampler(state.sampler);
        channelDrums = new Tone.Channel(state.channel).toDestination()
        sampler.connect(channelDrums)

        const part = new Tone.Part((time, note) => {
            sampler.triggerAttackRelease(
              note.noteName,
              note.duration,
              time,
              note.velocity
            )
          }, sequenceDrums.steps).start(0)
      
          part.loopEnd = sequenceDrums.duration;
          part.loop = true
          Tone.Transport.start()
    } 
    const channelMute = ['Mute', 'Sound']
    return (
        <div className="Container">
          <div className="title-row" >
                <h1 className="title" style={{textAlign: "center"}}>
                  Main beat
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
              handleValueChange(property, value, state, setState, settings = {channel: channelDrums})}}
          />
        <SC_Slider
          name="Volume"
          min={0}
          max={100}
          step={10}
          value={state.sampler.volume}
          property="samplerVolume"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channelDrums, sampler: sampler})}
        />
      <SC_ToggleButtonSet
                name=""
                options={channelMute}
                value={state.channel.mute}
                property="channelMute"
                handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channelDrums})}
              />
    </div>
    )
}
export default Sampler;