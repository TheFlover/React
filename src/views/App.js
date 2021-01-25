import React from 'react'
import './App.css'
import casino from '../components/Casino'

class App extends React.Component {
constructor(props){
  super(props)

  this.state = {
    users: ['A','B','C'],
    name:'Flo'
  }
}

  componentDidMount(){
    console.log('Component did mount')
    console.log(this.state.name)
    this.setState({
      name:'tki'
    }, () => console.log('Callback : ', this.state.name))
    console.log(this.state.name)
  }

  render () {
    return (
    <div className="App">
      {
        this.state.users.map((user,i) => <p key={i}>{user}</p>)
      }
      <p>{this.state.name}</p>
      <casino casinos={[{name: 'Monsupercasino', url:'httplol'}, {name: 'Moncasino', url:'httpmdr'}]}/>
    </div>
  );
  }
}

export default App;
