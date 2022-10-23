
export const handleValueChange = (property, value, state, setState, settings) => {
    const {synth={}, chorus={}, pingPongDelay={}, channel={}, sampler={}, distortion={}, jcReverb ={} } = settings;
    const stating = state
    if (property === 'synthType') {
      synth.oscillator.type = value
      stating.synth.oscillator.type = value
    } else if (property === "synthVolume") {
      synth.volume.value = value;
      stating.synth.volume = value;
    }
    else if (property === 'pingPongDelayWet') {
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
    } else if (property === "channelPan") {
      channel.pan.value = value
      stating.channel.pan = value
    }
    else if (property === "samplerVolume") {
      sampler.volume.value = value
      stating.sampler.volume = value
    }
    else if (property === "distAmount"){
      distortion.distortion = value
      stating.distortion.distortion = value
    } else if (property === "roomSize"){
      jcReverb.roomSize.value = value;
      stating.jcReverb.roomSize = value;
    }
    else if(property === "envelopeAtack") {
      synth.envelope.attack = value;
      stating.synth.envelope.attack = value;
    } else if( property === "envelopeAttackCurve") {
      synth.envelope.attackCurve = value;
      stating.synth.envelope.attackCurve = value;
    }
   setState({...stating})
  }
