import React from 'react'
import logo from '../img/logo.svg'
import '../views/App.css'

class App extends React.Component {
  render () {
    return (
    <div>
        {this.props.casino.map((c,i) => <p key={i}>{c.name}</p>)}
    </div>
  );
  }
}

export default App;
