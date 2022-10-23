import * as Tone from 'tone'
import React, { useState } from 'react'
import {sequence2, melodySettings2} from '../synth2'
import SC_Button from '../components/SC_Button'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'
import { handleValueChange } from '../helpers/handleValueChange'
import SC_Knob from '../components/SC_Knob'

let synth1
let chorus1
let pingPongDelay1
let noise1
let autoFilter1
let dist1
let channel1
let jcReverb

const Container_1 = () =>  {
  const [state, setState] = useState(melodySettings2)
  let settings = {};

  const handleStart = () => {
    synth1 = new Tone.Synth(state.synth);
    chorus1 = new Tone.Chorus(state.chorus).start()
    pingPongDelay1 = new Tone.PingPongDelay(
      state.pingPongDelay
    )
    channel1 = new Tone.Channel(state.channel).toDestination();
const autoFilter = new Tone.AutoFilter("5n");
    jcReverb = new Tone.JCReverb(state.jcReverb)
    synth1.chain(chorus1, pingPongDelay1, jcReverb, channel1)
    
    const part = new Tone.Part((time, note) => {
      synth1.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence2.steps).start(0)

    part.loopEnd = sequence2.duration;
    part.loop = true
    Tone.Transport.start()
  }

    const options = ['sine','triangle',,
    'amsine',
    'amsquare',
    'amsawtooth',
    'amtriangle',
    'pulse',
    'pwm']
    const channelMute = ['Mute', 'Sound']
    return (
      <div className="Container">
        <div className='flex-column'>
        <div  className='title-row'>  
          <h1 className='title'>Heaven</h1>
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
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = {synth: synth1, pingPongDelay: pingPongDelay1, chorus: chorus1, channel: channel1})}
        />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.pingPongDelay.wet}
          property="pingPongDelayWet"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = {synth: synth1, pingPongDelay: pingPongDelay1, chorus: chorus1, channel: channel1})}
        />

        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.chorus.wet}
          property="chorusWet"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = {synth: synth1, pingPongDelay: pingPongDelay1, chorus: chorus1, channel: channel1})}
        />
         <SC_Slider
          name="Room"
          min={0}
          max={1}
          step={0.1}
          value={state.jcReverb.roomSize}
          property="roomSize"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth1, chorus: chorus1, pingPongDelay: pingPongDelay1, channel: channel1, jcReverb: jcReverb})}
        />
        </div>
        <div className='flex-column'>
        <div className='divider'/>
        <SC_Slider
          name="Volume"
          min={-40}
          max={50}
          step={10}
          value={state.synth.volume}
          property="synthVolume"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth1, chorus: chorus1, pingPongDelay: pingPongDelay1, channel: channel1})}
        />
        
         <SC_Slider
          name="Channel hear"
          min={-1}
          max={1}
          step={0.1}
          value={state.channel.pan}
          property="channelPan"
        />
        
        <SC_Knob 
          name="Ears"
          min={-1}
          max={1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = {synth: synth1, pingPongDelay: pingPongDelay1, chorus: chorus1, channel: channel1})}
          />
         <SC_ToggleButtonSet
          name=""
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = {synth: synth1, pingPongDelay: pingPongDelay1, chorus: chorus1, channel: channel1})}
        />

        </div>
      </div>
    )
  }
  export default Container_1