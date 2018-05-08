import React from 'react';

let style = {
  container: {
    border: 'solid black 2px',
    display: 'inline-block',
  }
}

const Button = (props) => {
  return (
    <div style={style.container}>
      <button {...props}>
        {props.children}
      </button>
    </div>
  );
};

export default Button
