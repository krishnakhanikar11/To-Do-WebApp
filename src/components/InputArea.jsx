import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handle} type="text" value={props.intext} />
      <button onClick={() => {
        props.addit(props.intext)
      }}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
