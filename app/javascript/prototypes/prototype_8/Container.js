import * as Tone from 'tone'
import React, { useState } from 'react'

import SC_Button from './SC_Button'
import SC_ToggleButtonSet from './SC_ToggleButtonSet'
import SC_Slider from './SC_Slider'

let synth
let chorus
let pingPongDelay
let noise
let autoFilter
let dist
let fm

const Container = () =>  {
  const [state, setState] = useState({
    synthSettings :{
      volume: -20,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'sawtooth',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    },
    chorusSettings: {
      wet: 0.3,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      spread: 180
    }, 
    pingPongDelaySettings: { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

  })

  const handleStart = () => {
    const { synthSettings, chorusSettings, pingPongDelaySettings } = state

    synth = new Tone.Synth(synthSettings)
    chorus = new Tone.Chorus(chorusSettings).start()
    dist = new Tone.Distortion(200).toDestination()

    pingPongDelay = new Tone.PingPongDelay(
      pingPongDelaySettings
    ).toDestination()

    synth.chain(chorus, dist, pingPongDelay)

    const sequence = [
      {
        time: '0:0:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:0:1',
        noteName: 'A3',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:0:2',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:2:1',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:1',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:2',
        noteName: 'D3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:3:3',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:1:2',
        noteName: 'E4',
        duration: '4n',
        velocity: 0.7
      },
      {
        time: '1:1:3',
        noteName: 'D4',
        duration: '4n',
        velocity: 0.8
      },
      {
        time: '1:2:0',
        noteName: 'C3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:3:0',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:3:2',
        noteName: 'C4',
        duration: '4n',
        velocity: 1
      }
    ]

    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    part.loopEnd = '2m'
    part.loop = true
    Tone.Transport.start()
  }

  const handleValueChange = (property, value) => {
    const { synthSettings, chorusSettings, pingPongDelaySettings } = state

    if (property === 'synthType') {
      synth.oscillator.type = value
      synthSettings.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      pingPongDelay.wet.value = value
      pingPongDelaySettings.wet = value
    } else if (property === 'chorusWet') {
      chorus.wet.value = value
      chorusSettings.wet = value
    }

    setState({
        synthSettings,
        chorusSettings,
        pingPongDelaySettings
      })
  }
    // const { synthSettings, chorusSettings, pingPongDelaySettings } = state

    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={handleStart}
        />

        <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={state.synthSettings.oscillator.type}
          property="synthType"
          handleChange={handleValueChange}
        />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.pingPongDelaySettings.wet}
          property="pingPongDelayWet"
          handleChange={handleValueChange}
        />

        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={state.chorusSettings.wet}
          property="chorusWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
  export default Container