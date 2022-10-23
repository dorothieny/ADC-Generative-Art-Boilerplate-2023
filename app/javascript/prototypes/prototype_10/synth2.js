    const melodySettings2 = {
        synth : {
            volume: 0,
            detune: 0,
            portamento: 0.05,
            envelope: {
              attack: 0.05,
              attackCurve: 'exponential',
              decay: 0.2,
              decayCurve: 'exponential',
              sustain: 0.2,
              release: 1,
              releaseCurve: 'exponential'
            },
            oscillator: {
              type: 'sine',
              modulationType: 'triangle',
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
            depth: 0.7,
            spread: 180
          },
      
          pingPongDelay : { 
            wet: 0.2, 
            delayTime: 0.25, 
            maxDelayTime: 1 
          },
      
          channel : { 
            volume: 0, 
            pan: 1, 
            mute: false, 
            solo: false
          },
          jcReverb: {
            wet: 1,
            roomSize: 0.3
          }
    }

    const sequence2 = {
      steps : [
          {time: '0:0:0', noteName: 'G4', duration: '5n', velocity:1},
          {time: '0:0:2', noteName: 'A4', duration: '2n', velocity:1},
          {time: '0:1:2', noteName: 'G4', duration: '5n', velocity:1},
          {time: '0:3', noteName: 'A4', duration: '5n', velocity:1},
          {time: '0:3:2', noteName: 'B4', duration: '5n', velocity:1},
          {time: '1:0', noteName: 'C5', duration: '5n', velocity:1},
          {time: '1:1', noteName: 'B4', duration: '5n', velocity:1},
          {time: '1:1:2', noteName: 'A4', duration: '5n', velocity:1},
          {time: '2:2', noteName: 'B4', duration: '5n', velocity:1},
          {time: '2:2:2', noteName: 'A4', duration: '5n', velocity:1},
          {time: '2:3', noteName: 'G4', duration: '5n', velocity:1},
          {time: '2:3:2', noteName: 'A4', duration: '1n', velocity:1},
          ],
        duration: '1m'
    }
    export { sequence2, melodySettings2 }