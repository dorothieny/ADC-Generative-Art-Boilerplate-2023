import React from 'react'
import classnames from 'classnames'

 const SC_ToggleButton = (props) => {
    const { text, isOn, handleClick } = props
    const classes = classnames({
        SC_ToggleButton: true,
        active: isOn
      })

    return (
      <div className={classes} onClick={handleClick}>
        {text}
      </div>
    )
}
export default SC_ToggleButton;