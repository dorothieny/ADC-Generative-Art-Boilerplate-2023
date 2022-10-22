import React, {useState} from 'react'
import SC_Button from '../components/SC_Button';
import * as Tone from 'tone'
import { sequenceDrums, drumsSettinds } from '../drums';
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet';
import SC_Slider from '../components/SC_Slider';
import { handleValueChange } from '../helpers/handleValueChange';


let channelDrums

const Sampler = () => {
    const [state, setState] = useState(drumsSettinds)
    let settings = {}

    const handleStart = () => {
        const sampler = new Tone.Sampler({
            urls: {
                A1: "00001-Linn-9000-BassDrumrum1.mp3",
                A2: "00016-Linn-9000-Snare-2.mp3",
            },
            baseUrl: "http://localhost:3000/samples/",
            // onload: () => {
            //     sampler.triggerAttackRelease(["A1", "A2", "A1", "A2"], 1);
            // }
        });

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
    const channelMute = [true, false]
    return (
        <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={handleStart}
        />

        <SC_ToggleButtonSet
          name="Channel mute"
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channelDrums})}
        />
         <SC_Slider
          name="Channel hear"
          min={-1}
          max={1}
          step={0.1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: {}, chorus:{}, pingPongDelay:{}, channel: channelDrums})}
        />

    </div>
    )
}
export default Sampler;