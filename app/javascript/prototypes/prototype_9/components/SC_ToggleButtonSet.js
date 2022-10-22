import React from 'react'
import SC_ToggleButton from './SC_ToggleButton'

const SC_ToggleButtonSet = (props) => {
 const { name, options, value, handleChange, property } = props

    return (
      <div className="SC_ToggleButtonSet">
        <h3>{name}</h3>
        <div>
        {options.map((option, i) => {
         return (
            <SC_ToggleButton
            text={option.toString()}
            isOn={option === value}
            handleClick={() => handleChange(property, option)}
            key={i}
            />
      )
    })}
            </div>
      </div>
    )
  }
  export default SC_ToggleButtonSet;