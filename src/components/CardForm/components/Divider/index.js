import React from 'react';

function Divider({ text }){
  return(
    <div className="divider">
      { text && <p>{text}</p> }
    </div>
  )
}

export default Divider
