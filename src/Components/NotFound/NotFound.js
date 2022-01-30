import React from 'react';
import {Link} from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="container" style={{textAlign:'center'}} >
            <br/><br/>
            <h5 style={{color: 'red',textAlign:'center'}}>Haven't select any vehicle yet. Go home ,and select your favorite vehicle</h5>
            <br/>
            <Link to='/home'><button className='btn btn-danger' >Home</button></Link>
        </div>
    );
};

export default NotFound;