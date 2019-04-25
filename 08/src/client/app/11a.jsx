import React from 'react';

const MyFieldComponent = (props) => {
    return <div>
        <label>{props.label}: </label> <br/>
        <input type="text" value={props.value} onChange={props.onChange} />
        <span style={{color: props.color}}>{"\t" + props.validityMessage}</span>
    </div>
};

export default MyFieldComponent;
