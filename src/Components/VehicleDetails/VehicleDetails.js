import React from 'react';
import { useHistory } from 'react-router';
import './vehicleDetails.css'
import {Link} from 'react-router-dom'

const VehicleDetails = (props) => {
    const {name,img,id}=props.vehicle;
    const history=useHistory();
    const handleClick=()=>{history.push(`/destination/${id}`);}
    return (
        <div  className="vehicle d-flex justify-content-center">
            <div style={{cursor:"pointer",backgroundColor:'white'}}className="vehicle-details mt-5" onClick={handleClick}>
            <img src={img} alt=""/>
            <h4 className='mt-4'>{name}</h4>
            </div>
        </div>
    );
};
export default VehicleDetails;