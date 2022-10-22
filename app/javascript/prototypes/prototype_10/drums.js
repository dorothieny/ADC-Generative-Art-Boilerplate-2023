const sequenceDrums = {
    steps: [
        {
          time: '0:0:0',
          noteName: 'A1',
          duration: '1n',
          velocity: 1
        },
      
        {
          time: '0:1:0',
          noteName: 'A1',
          duration: '1n',
          velocity: 1
        },
        {
          time: '0:0:2',
          noteName: 'A2',
          duration: '1n',
          velocity: 0.7
        },
        
        
      ],
    duration: '5n'
}

const drumsSettinds = {
    channel: {
        volume: 0, 
        pan: 1, 
        mute: false, 
        solo: false
    },
    sampler: {
      urls: {
          A1: "00049-Vermona-DRM1-MK3-BassDrum27.mp3",
          A2: "00039-Tama-TS-305-Tom-3.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
      // onload: () => {
      //     sampler.triggerAttackRelease(["A1", "A2", "A1", "A2"], 1);
      // }
      volume: 0,
    }
}
export {sequenceDrums, drumsSettinds}