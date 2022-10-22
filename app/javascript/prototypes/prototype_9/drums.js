const sequenceDrums = {
    steps: [
        {
          time: '0:0:0',
          noteName: 'A1',
          duration: '4n',
          velocity: 1
        },
        {
          time: '0:1:0',
          noteName: 'A2',
          duration: '4n',
          velocity: 1
        },
        {
          time: '0:2:0',
          noteName: 'A1',
          duration: '4n',
          velocity: 1
        },
        {
          time: '0:3:0',
          noteName: 'A2',
          duration: '4n',
          velocity: 1
        },
      ],
    duration: '1m'
}

const drumsSettinds = {
    channel: {
        volume: 0, 
        pan: 1, 
        mute: false, 
        solo: false
    }
}
export {sequenceDrums, drumsSettinds}