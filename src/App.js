import React from 'react';
import './App.css';
import Welcome from './Welcome.js';
import Counter from './Counter.js'


const App = () => {
  return (
    <section className="App">
        <Welcome name={'Nick'} isTeacher />
        <Welcome name="Tim" />
        <Welcome name="Leo"></Welcome>
        <Counter />
    </section>
  );
}

export default App;
