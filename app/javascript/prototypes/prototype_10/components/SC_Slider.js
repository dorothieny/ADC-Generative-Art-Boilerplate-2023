import React, { useRef} from 'react'

 const SC_Slider = (props) => {
   const input =useRef(null);
    const { property, handleChange, name, min, max, step, value  } = props
 
    const handleThisChange = () => {
    const value = input.current.valueAsNumber
    handleChange(property, value)
  }

    return (
      <div className="SC_Slider">
        <h3>{name}</h3>

        <input
          ref={input}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onInput={handleThisChange}
        />
      </div>
    )
  }
  export default SC_Slider;