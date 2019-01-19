import React, { Component } from 'react';
import './App.css';
import Light from '../components/Light';
import Dark from '../components/Dark';



class App extends Component {

constructor (props) {
  super(props);
    this.state={
      lightsOn: false
    }

}

onClick=(event)=> {
  this.setState(prevState => ({
      lightsOn: !prevState.lightsOn
    }))
}

  render() {
    return (

      <div className="App" >

{this.state.lightsOn ? 
  <Light onClick={this.onClick}/> :
   

    <Dark onClick={this.onClick}/>

      

    }


      </div>
    );
  }
}

export default App;
