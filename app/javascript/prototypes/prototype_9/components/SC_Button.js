import React from 'react'

const SC_Button = (props) => {
    const { text, handleClick } = props;
    return (
      <div className="SC_Button" onClick={handleClick}>
        {text}
      </div>
    ) 
}
export default SC_Button;