import React from 'react';

// const Welcome = (props) => {
//     return (
//       <div>
//         {
//           props.isTeacher && 
//           <h2>Hello, {props.name}, I am a Teacher</h2>
//         }
//         {
//           !props.isTeacher &&
//           <p>{`Hello ${props.name}, I am a student`}</p>
//         }
//       </div>
//     );
//   };

  class Welcome extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
        const {name, isTeacher, count} = this.props;
        if (isTeacher) {
            return (<h2>Hello, {name}, I am a Teacher! {this.props.count}</h2>);
        } else {
            return (<p>Hello, {name}, I am a student! {this.props.count}</p>);
        }
      }
  };
  
  export default Welcome;

