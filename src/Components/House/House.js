import React, {Component} from 'react'
import './House.css'

class House extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className='house-card'>
        <h2>{this.props.house.name}</h2>
        <h2>{this.props.house.address}</h2>
        <h2>{this.props.house.city}</h2>
        <h2>{this.props.house.zipcode}</h2>
        <button>Delete</button>
      </div>
    )
  }

}
export default House;