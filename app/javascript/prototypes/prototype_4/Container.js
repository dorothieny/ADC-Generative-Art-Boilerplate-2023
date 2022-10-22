import React, {useState, useEffect} from 'react';
import SC_Button from './SC_Button';
import SC_Slider from './SC_Slider';
import SC_ToggleButtonSet from './SC_ToggleButtonSet';
const Container = () => {

    const options = ["sine", "triangle", "sawtooth", "square"];
    const [currentValue, setCurrentValue] = useState("sine");
    const [currentFreq, setCurrentFreq] = useState(440);
    const [oscillator, setOscillator] = useState();
    const [audioCtx, setAudioCtx] = useState();

    const createNewOscillator = () => {
      const audioCtx = new(window.AudioContext || window.webkitAudioContext)();
      const  oscillator = audioCtx.createOscillator();
      oscillator.type = currentValue;
      oscillator.frequency.setValueAtTime(currentFreq, audioCtx.currentTime); // value in hertz
      oscillator.connect(audioCtx.destination);
      oscillator.start();

      setAudioCtx(audioCtx);
      setOscillator(oscillator);
      
    } 
     const handleOscillatorChange = (property,value) => {
        if(property == 'type') {
            oscillator.type = value;
        }
        if(property == "frequency") {
            oscillator.frequency.setValueAtTime(value, audioCtx.currentTime); // value in hertz
        }
      }

    return (
        <div className='Container'>
        <SC_Button text="Art Design & Coding" handleClick={() => createNewOscillator()}/>
        <SC_ToggleButtonSet  
            name="Synth type" 
            options={options} 
            property={"type"}
            value={currentValue} 
            handleChange={(property, value) => {
                if(oscillator) {
                    handleOscillatorChange(property, value)
                }
                setCurrentValue(value)
            }}
        />
        <SC_Slider 
        property="frequency" 
        handleChange={(property, value) => {
            if(oscillator) {
                handleOscillatorChange(property, value)
            }
            setCurrentFreq(value)
        }} 
        name={"Frequency"} 
        min={0} 
        max={1000} 
        step={10} 
        value={currentFreq}/>
        </div>
    )
}

export default Container;