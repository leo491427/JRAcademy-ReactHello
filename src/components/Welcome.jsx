import React from 'react'

const Welcome = (props) => {
    return (
      <div>
          <h2>Hello, {props.author}, {props.content}</h2>
      </div>
    );
}

export default Welcome;