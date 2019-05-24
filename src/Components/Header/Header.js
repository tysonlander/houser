import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
  constructor(){
    super();
    
  }
  render(){
    return(
      <div className='header-div'>
        <h1 className='houser-logo'>Houser</h1>
      </div>
    )
  }

}
export default Header;