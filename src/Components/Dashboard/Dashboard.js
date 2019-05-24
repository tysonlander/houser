import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      housesList: []
    }
  }
  render(){
    return(
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard'><button>Add New Property</button></Link>
        <House/>
      </div>
    )
  }

}
export default Dashboard;


