import PropTypes from 'prop-types'
import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const clickUpper = () => {
        const capText = text.toUpperCase();
        setText(capText);
    }
    const clickUpperChange = (e) => {
        setText(e.target.value)
    }
    const clickLower = () => {
        const lowText = text.toLowerCase();
        setText(lowText);
    }
    const clickCopy = () => {
        document.getElementById("myBox").select();
        navigator.clipboard.writeText(text)
    }
    const clickClear = () => {
        const clearText = ""
        setText(clearText);
    }
    const clickInvert = () => {
        let invertText = ""
        for(let i = 0; i < text.length; i++){
            if(text[i].toUpperCase() === text[i]){
                invertText = invertText + text[i].toLowerCase();
            }else {
                invertText = invertText + text[i].toUpperCase();
            }
        }
        setText(invertText);
    }
    
    // setText("Hello");
    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label my-3">{props.heading}</label>
                <textarea className="form-control" value={text} placeholder='Enter Text Here!' onChange={clickUpperChange} id="myBox" rows="14"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={clickUpper}>UpperCase</button>
            <button className="btn btn-primary mx-3" onClick={clickLower}>LowerCase</button>
            <button className="btn btn-primary mx-3" onClick={clickInvert}>InvertCase</button>
            <button className="btn btn-primary mx-3" onClick={clickCopy}>Copy</button>
            <button className="btn btn-primary mx-3" onClick={clickClear}>Clear</button>
        </div>
        <div className="container my-3">
            <h1>Your Text Summary.</h1>
            <p>{text.split(" ").length-1} Words And {text.length} Characters</p>
            <p>{0.008 * (text.split(" ").length-1) * 60} Seconds To Read</p>
            <p>{0.008 * (text.split(" ").length-1)} Minutes To Read</p>
            <h3>Preview</h3>
            <p>{text.toLowerCase()}</p>
        </div>
        </>
  )
}
TextForm.propTypes = {heading:PropTypes.string}