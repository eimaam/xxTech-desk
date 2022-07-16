import React from 'react'
import whatsapp from "../Assets/images/whatsapp.png"

export default function FixedContactButton() {
  return (
    <div id="fixedButton">
      <a href="https://api.whatsapp.com/send?phone=+2348068375557&text=Hi%20there!">
        <img src={whatsapp} alt="whatsapp-icon" />
      </a>
    </div>
  )
}
