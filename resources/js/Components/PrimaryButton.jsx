import React from 'react'
import '../../css/components/button.css'

function PrimaryButton(props) {
  return (
    <button  className="button button-primary" type="button">{props.text}</button>
  )
}

export default PrimaryButton