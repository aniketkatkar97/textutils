import React, { useState } from "react";

export default function TextForm(props) {
  let txtl;
  let [text, setText] = useState("");
  let [textLength, setTextLength] = useState(0);
  let [outputValue, setOutputvalue] = useState();

  const onChangeEvent = (e) => {
    setText(e.target.value);
    setOutputvalue(e.target.value);
    txtl = e.target.value.trim().split(" ");
    if (txtl.at(-1) === "") {
      setTextLength(txtl.length - 1);
    } else {
      setTextLength(txtl.length);
    }
  };

  const upperCase = () => {
    setOutputvalue(text.toUpperCase());
  };

  const lowerCase = () => {
    setOutputvalue(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
    setTextLength(0);
    setOutputvalue("");
  };

  const reverseText = () => {
    txtl = text.trim().split("").reverse().join("");
    console.log(txtl);
    setOutputvalue(txtl);
  };

  const reverseOrder = () => {
    txtl = text.trim().split(" ").reverse().join(" ");
    setOutputvalue(txtl);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputValue);
  };

  const pasteFromClipboard = async () => {
    txtl = await navigator.clipboard.readText();
    setText(txtl);
  };

  const removeExtraSpace = () => {
    txtl = text.split(/[ ]+/g);
    setOutputvalue(txtl.join(" "));
  };
  return (
    <>
      <div
        className={`container my-2 text-${
          props.mode === "dark" ? "white" : "#4e4b4b"
        }`}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="6"
            value={text}
            onChange={onChangeEvent}
            style={{
              backgroundColor: props.mode === "dark" ? "#4e4b4b" : "white",
              color: props.mode === "dark" ? "white" : "#4e4b4b",
            }}
          ></textarea>
          <button className="btn btn-primary mx-1 my-2" onClick={clearText}>
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={pasteFromClipboard}
          >
            Paste
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={upperCase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={lowerCase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={reverseText}>
            Text Reverse
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={reverseOrder}>
            Words in reverse
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={removeExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className={`container my-2 text-${
          props.mode === "dark" ? "white" : "#4e4b4b"
        }`}
      >
        <p>
          words : {textLength} | characters : {text.length} | approximate
          reading time : {0.008 * textLength} minutes
        </p>
        <h4>Preview : </h4>
        <textarea
          className="form-control"
          id="myBox"
          rows="6"
          value={outputValue}
          style={{
            backgroundColor: props.mode === "dark" ? "#4e4b4b" : "white",
            color: props.mode === "dark" ? "white" : "#4e4b4b",
          }}
          disabled
        ></textarea>
        <button className="btn btn-primary mx-1 my-2" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
    </>
  );
}
