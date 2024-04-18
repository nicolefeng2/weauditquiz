import "./Box.css";
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import manIcon from './assets/man_icon.png'

interface BoxProps {
  color:string,
  labelColor: string,
  rating:string,
  quote:string,
  percent:number,
  yourChoice:boolean,
}

function YourChoice(){
  return(
    <div className="your-choice-container">
      <img src={manIcon} className="man-icon" alt="man"/>
      <p className="your-choice-text"> Your <br/> Choice</p>
    </div>
  )
}

function Quote({ quote }: { quote: string }){
  return(
    <div className="quote-container">
      <p className="quote-text"> {quote} </p>
    </div>
  )
}

function Percent({ percent }: { percent: number }){
  return(
    <div className="percent-container">
      <p className="percent-text"> {percent}% </p>
    </div>
  )
}

function Label({ labelColor, rating }: { labelColor: string, rating: string }){
  const labelStyle: React.CSSProperties = { backgroundColor: labelColor };
  return(
    <div className="bubble-label-container" style={labelStyle}>
      <p className="bubble-label-text"> {rating} </p>
    </div>
  )
}

function Box({ color, labelColor, quote, percent, rating, yourChoice }: BoxProps){
  const boxStyle: React.CSSProperties = { backgroundColor: color };
  return(
    <div className="box-container" style={boxStyle}>
            
      <div className="top-row-box">
        
        {quote !== '' ? <Quote quote={quote} /> : <Percent percent={percent} />}
        {yourChoice && <YourChoice/>}

      </div>
      
      <Label labelColor={labelColor} rating={rating} />

    </div>
  );
}
export default Box;