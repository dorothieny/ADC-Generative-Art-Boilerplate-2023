const sequence_3Drums = {
    steps: [
        {
          time: '0:0:0',
          noteName: 'A3',
          duration: '1n',
          velocity: 1
        },  
        {
          time: '0:0:2',
          noteName: 'A3',
          duration: '1n',
          velocity: 1
        },  
        {
          time: '0:0:3',
          noteName: 'A3',
          duration: '1n',
          velocity: 1
        },  
      ],
    duration: '1n'
}

const drums_3Settinds = {
    channel: {
        volume: 0, 
        pan: 1, 
        mute: false, 
        solo: false
    },
     sampler:{
      urls: {
        A3: "00048-Vermona-DRM1-MK3-BassDrum25.mp3",
      },
      baseUrl: "http://localhost:3000/samples/",
      // onload: () => {
      //     sampler.triggerAttackRelease(["A1", "A2", "A1", "A2"], 1);
      // }
      volume: 0
  }
}
export {sequence_3Drums, drums_3Settinds}