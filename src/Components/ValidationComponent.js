import React from 'react';

const validationComponent = (props) => {
  let outputText = null;

  if (props.length >=5) {
    outputText = "Text long enough"
  } else {
    outputText = "Text too short"
  }

  return (
    <p>{outputText}</p>
  )
};

export default validationComponent;