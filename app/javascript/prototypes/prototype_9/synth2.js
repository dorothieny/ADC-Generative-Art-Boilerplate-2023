    const melodySettings2 = {
        synth : {
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
          }
    }

    const sequence2 = {
        steps: [
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
          ],
        duration: '2m'
    }
    export { sequence2, melodySettings2 }