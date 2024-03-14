import React, { useState } from 'react';

export default function TextFrom(props) {

  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpace =() =>{
    let newText =text.split(/[ ]+/);
    setText(newText.join(" "))
    props.Showalert("Remove Extra Space","success");
  }

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.Showalert("Convert to Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.Showalert("Convert to Lowercase","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.Showalert("Text Clear","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    
  };

  return (
    <>
      <div className='container my-2' style={{backgroundColor:props.mode ==='dark'?'#043742':'white',color:props.mode ==='dark'?'white':'black'}}>
        <h6 >{props.heading}</h6>
        <div className="form-floating">
          <textarea className="form-control my-2" value={text} onChange={handleOnChange} rows="10" placeholder="Leave a comment here" 
          style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode ==='dark'?'white':'black'}} id="myBox"></textarea>
          <label htmlFor="myBox"></label>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={{backgroundColor:props.mode ==='dark'?'#043742':'white',color:props.mode ==='dark'?'white':'black'}}>
        <h5>Your Text Summary</h5>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minute of reads</p>
        <h5>preview</h5>
        <p>{text.length>0?text:"Enter something above to get perview"}</p>
      </div>
    </>
  );
}
