import { melodySettings } from "../synth"
export const handleValueChange = (property, value, state, setState, settings) => {
    const {synth, chorus, pingPongDelay, channel } = settings;
    const stating = state
    if (property === 'synthType') {
      synth.oscillator.type = value
      stating.synth.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      pingPongDelay.wet.value = value
      stating.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      chorus.wet.value = value
      stating.chorus.wet = value
    } else if(property == 'channelVolume') {
      channel.volume.value = value
      stating.channel.volume = value
    } else if (property === "channelMute") {
      channel.mute = value
      stating.channel.mute = value
    } else if (property = "channelPan") {
      channel.pan.value = value
      stating.channel.pan = value
    }
   setState({...stating})
  }
