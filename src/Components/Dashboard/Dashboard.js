import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      housesList: []
    }
  }

  componentDidMount(){
    axios.get('/api/houses')
    .then(response => {
      this.setState({ housesList: response.data });
    })
    .catch(err => {
      console.log(err);
    })
  }

  
  render(){
    const mappedHouses = this.state.housesList.map((element, i) => {
      return(
        <House
          key={i}
          house={element}
        />
      )
    })

    return(
      <div>
        <h1>Dashboard</h1>
        <Link to='/wizard'><button>Add New Property</button></Link>
        {/* <House/> */}
        {mappedHouses}
      </div>
    )
  }

}
export default Dashboard;


