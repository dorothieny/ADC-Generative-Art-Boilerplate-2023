import * as Tone from 'tone'
import React, { useState } from 'react'
import {sequence, melodySettings} from '../synth';
import SC_Button from '../components/SC_Button'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'
import  {handleValueChange} from '../helpers/handleValueChange'
import SC_Knob from '../components/SC_Knob';

let synth
let chorus
let pingPongDelay
let noise
let autoFilter
let distortion
let channel

const Container = () =>  {
  const [state, setState] = useState(melodySettings)
  let settings = {};

  const handleStart = () => {
    synth = new Tone.Synth(state.synth);
    chorus = new Tone.Chorus(state.chorus).start()
     distortion = new Tone.Distortion(state.distortion)

    const autoFilter = new Tone.AutoFilter("5n");
    const jcReverbSettings = {
      wet: 1,
      roomSize: 0.3
    }

    const jcReverb = new Tone.JCReverb(jcReverbSettings)

    pingPongDelay = new Tone.PingPongDelay(
      state.pingPongDelay
    )
    channel = new Tone.Channel(state.channel).toDestination();
    synth.chain(chorus, autoFilter, distortion, pingPongDelay, jcReverb, channel)

    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence.steps).start(0)

    part.loopEnd = sequence.duration;
    part.loop = true
    Tone.Transport.start()

  }
    const options = ['sine', 'square', 'sawtooth', 'triangle']
    const channelMute = ['Mute', 'Sound']
  const distOptions = [0.5, 1, 2]
    return (
      <div className="Container">
      <div  className='title-row'>  
          <h1 className='title'>Hell</h1>
          <SC_Button
          text=""
          handleClick={handleStart}
        />
        </div>

        <SC_ToggleButtonSet
          name="Oscillator type"
          options={options}
          value={state.synth.oscillator.type}
          property="synthType"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />

        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.chorus.wet}
          property="chorusWet"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />
        <SC_ToggleButtonSet
          name="Distortion amount"
          options={distOptions}
          value={state.distortion.distortion}
          property="distAmount"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel, distortion: distortion})}
        />

        <div className='divider'/>
    
         <SC_Slider
          name="Volume"
          min={-40}
          max={50}
          step={10}
          value={state.synth.volume}
          property="synthVolume"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />
         <SC_Knob 
          name="Ears"
          min={-1}
          max={1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
          />
          <SC_ToggleButtonSet
          name=""
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />
         
      </div>
    )
  }
  export default Container