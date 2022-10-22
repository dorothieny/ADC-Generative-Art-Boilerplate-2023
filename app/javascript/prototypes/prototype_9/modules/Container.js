import * as Tone from 'tone'
import React, { useState } from 'react'
import {sequence, melodySettings} from '../synth';
import SC_Button from '../components/SC_Button'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet'
import SC_Slider from '../components/SC_Slider'
import  {handleValueChange} from '../helpers/handleValueChange'

let synth
let chorus
let pingPongDelay
let noise
let autoFilter
let dist
let channel

const Container = () =>  {
  const [state, setState] = useState(melodySettings)
  let settings = {};
  const handleStart = () => {
    synth = new Tone.Synth(state.synth);
    chorus = new Tone.Chorus(state.chorus).start()
    dist = new Tone.Distortion(200)
    pingPongDelay = new Tone.PingPongDelay(
      state.pingPongDelay
    )
    channel = new Tone.Channel(state.channel).toDestination();
    synth.chain(chorus, dist, pingPongDelay, channel)

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
    const channelMute = [true, false]

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={handleStart}
        />

        <SC_ToggleButtonSet
          name="Type"
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
         <SC_Slider
          name="Channel Volume"
          min={0}
          max={100}
          step={10}
          value={state.channel.volume}
          property="channelVolume"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />
          <SC_ToggleButtonSet
          name="Channel mute"
          options={channelMute}
          value={state.channel.mute}
          property="channelMute"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />
         <SC_Slider
          name="Channel hear"
          min={-1}
          max={1}
          step={0.1}
          value={state.channel.pan}
          property="channelPan"
          handleChange={(property, value) => handleValueChange(property, value, state, setState, settings = { synth: synth, chorus: chorus, pingPongDelay: pingPongDelay, channel: channel})}
        />

      </div>
    )
  }
  export default Container