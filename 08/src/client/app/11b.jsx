import React from 'react';

const MyTextAreaComponent = (props) => {
    return <div id="textarea">
        <textarea placeholder="Write your complaint here..." rows="3" value={props.value} onChange={props.onChange} style={{resize: "none"}} >
        </textarea>
        <span style={{ color: props.color }}>{"\t" + props.validityMessage}</span>
    </div>
};

export default MyTextAreaComponent;