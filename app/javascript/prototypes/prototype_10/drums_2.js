const sequence_2Drums = {
    steps: [
        {
          time: '0:0:0',
          noteName: 'B1',
          duration: '5n',
          velocity: 0.5
        },  
        {
          time: '0:2:0',
          noteName: 'B1',
          duration: '5n',
          velocity: 0.5
        },  
      ],
    duration: '10n'
}

const drums_2Settinds = {
    channel: {
        volume: 0, 
        pan: 1, 
        mute: false, 
        solo: false
    },
    sampler: {
      urls: {
          B1: "00028-Pearl-Drum-X-Hat.mp3",      
      },
      baseUrl: "http://localhost:3000/samples/",
      // onload: () => {
      //     sampler.triggerAttackRelease(["A1", "A2", "A1", "A2"], 1);
      // }
      volume: 0
  }
}
export {sequence_2Drums, drums_2Settinds}