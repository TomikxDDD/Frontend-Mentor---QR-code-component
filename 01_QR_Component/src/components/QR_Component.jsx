import React from "react"

export default function QR_Component(props){
    
  return(
    <div className="card">
      <div className="qr-code"><img src={props.imgPath} alt="QR code"/></div>
      <div className="card__text">
        <h2 className="card__text__h2">{props.title}</h2>
        <p className="card__text__p">{props.text}</p>
      </div>
    </div>
  )
}