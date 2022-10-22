const sequence = {
    steps: [
      {
            time: '0:0:0',
            noteName: 'B1',
            duration: '1m',
            velocity: 1
          },
      
      {
            time: '1:0:0',
            noteName: 'E3',
            duration: '2m',
            velocity: 1
          },
          // {
          //   time: '0:1:0',
          //   noteName: 'B2',
          //   duration: '1n',
          //   velocity: 1
          // },
          // {
          //   time: '0:0:2',
          //   noteName: 'G3',
          //   duration: '1m',
          //   velocity: 1
          // },
      //     {
      //       time: '0:3:0',
      //       noteName: 'B2',
      //       duration: '5n',
      //       velocity: 1
      //     },
      
      // {
      //       time: '1:0:0',
      //       noteName: 'E3',
      //       duration: '1n',
      //       velocity: 1
      //     },
      //         {
      //   time: '1:2:0',
      //   noteName: 'C7',
      //   duration: '1n',
      //   velocity: 1
      // },
      //      {
      //   time: '0:0:2',
      //   noteName: 'B2',
      //   duration: '1n',
      //   velocity: 1
      // },
    ],
  duration: '2m'
}
const melodySettings = {
    synth: {
        volume: 0,
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

      chorus : {
        wet: 0.3,
        type: 'sine',
        frequency: 1.5,
        delayTime: 3.5,
        depth: 1,
        spread: 180
      }, 
      pingPongDelay: { 
        wet: 0.2, 
        delayTime: 0.25, 
        maxDelayTime: 1 
      }, 
      channel: { 
        volume: 0, 
        pan: 1, 
        mute: false, 
        solo: false
      },
      distortion: {
        wet: 1,
        distortion: 1,
        oversample: '4x'
      }
    


}

  export {sequence, melodySettings}
