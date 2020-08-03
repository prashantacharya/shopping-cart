import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {getNumbers} from '../actions/getAction'
import {Link} from 'react-router-dom'

const Navbar = (props) => {

  useEffect(()=> {
     getNumbers();
  }, [])
  return (
    <header>
      <div className='overlay'></div>
      <nav>
        <h2>Beauty Shop</h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li className='cart'>
            <Link to='/cart'>
              <i className='fas fa-shopping-basket'></i>
              Cart <span>{props.basketProps.basketNumbers}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  basketProps: state.basketState
})

export default connect(mapStateToProps, {getNumbers}) (Navbar);
