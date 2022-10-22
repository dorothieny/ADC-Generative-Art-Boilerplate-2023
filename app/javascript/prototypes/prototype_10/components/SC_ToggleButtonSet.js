import React from 'react'
import SC_ToggleButton from './SC_ToggleButton'

const SC_ToggleButtonSet = (props) => {
 const { name, options, value, handleChange, property } = props

    return (
      <div className="SC_ToggleButtonSet">
        <h3>{name}</h3>
        <div className='set-flex'>
        {options.map((option, i) => {
         return (
            <SC_ToggleButton
            text={option.toString()}
            isOn={option === value || value===true && option == 'Mute' ||value===false && option == 'Sound'}
            handleClick={() => {
              if(option == 'Sound') {
                handleChange(property, false)
              } else if (option == 'Mute') {
                handleChange(property, true)
              } else {
                handleChange(property, option)}}
              }
            key={i}
            />
      )
    })}
            </div>
      </div>
    )
  }
  export default SC_ToggleButtonSet;