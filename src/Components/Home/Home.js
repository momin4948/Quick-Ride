import React from 'react';
import vehicle from '../../FakeData/fakedata.json'
import VehicleDetails from '../VehicleDetails/VehicleDetails';
import background from '../../Images/Bg.png'
import './home.css'
const Home = () => {
    return (
        <div>
         <div className="background">
                <div className="container ">
                    <div className=" row d-flex justify-content-center">
                    {
                        vehicle.map(vehicle=> <VehicleDetails vehicle={vehicle} key={vehicle.id}></VehicleDetails>)
                    }
                    </div>
                </div>
         </div>
         <footer style={{textAlign:'center',marginTop:'15px'}}>All right reserved Mominul_Asif</footer>
        </div>
    );
};
export default Home;