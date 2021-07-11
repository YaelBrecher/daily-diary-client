import React from 'react';
import './App.css';
import axios from './axiosDefult';
import Test from './test'

class App extends React.Component {

   state = {
    users: []
  }
componentDidMount(){
  axios.get("/Users/Get")
    .then(x => {
      console.log(x.data)
      const users = x.data;
      this.setState({ users:users });
    }).catch(x => { })


 
}
render(){
  return (
    <div>
    <ul>
      { this.state.users.map(user => <li>{user.UserLastName}</li>) }
    </ul>
    ddd
    <Test/>
    </div>
  );
}
}

export default App;
