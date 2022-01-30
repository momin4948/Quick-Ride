import React,{useState} from 'react';
import './destination.css'
import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../FakeData/fakedata.json'
import { useForm } from "react-hook-form";
import people from '../../Images/peopleicon.png'
import map from '../../Images/Map.png'
import { Link } from 'react-router-dom';

const Destination = () => {
    const {id}=useParams()
    const rideOn=fakeData.filter(ride=>ride.id == id)
    const [search,setSearch]=useState(false)

    const { register, handleSubmit } = useForm();
    const [searchResult, setSearchResult] = useState({})

    const onSubmit=data=>{
        const newSearchResult = {
            pickFrom: data.pickFrom,
            pickTo: data.pickTo,
            date:data.date
           }
           setSearchResult(newSearchResult)
           setSearch(true)
    }
    return (
        <div className='container'>
          <div className="destination row">
            <div className="destination-area col-md-3">
                {!search? <div>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Pick From</Form.Label>
                                <Form.Control type="name" name="pickFrom" ref={register({ required: true })}  required/>
                            </Form.Group>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Pick To</Form.Label >
                                <Form.Control type="name" name="pickTo" ref={register({ required: true })}  required/>
                            </Form.Group>
                            <Form.Group controlId="formGroupName">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" name="date" ref={register({ required: true })} required/>
                            </Form.Group>
                            <input type="submit" value="Search" className=" btn btn-danger"style={{width:"230px",height:"auto",marginTop:'5px'}}/>
                        </Form>
                </div>
                :
                <div className="search-result">
                    <h5 className="bg-danger text-white p-3 rounded"> From : {searchResult.pickFrom} <br/> <br/>To : {searchResult.pickTo}</h5>
                    <p>Date : {searchResult.date}</p>
                    <div className="result-card bg-white d-flex justify-content-around rounded py-4 px-2">
                            <img  className="w-25" src={rideOn[0].img} alt={rideOn[0].id} />
                            <p className="p-2">{rideOn[0].name}</p>
                            <img style={{width:'20px',height:'25px',marginTop:'10px'}} src={people} alt=""/>
                            <p style={{marginTop:'10px'}}>{rideOn[0].capacity}</p>
                            <br/>
                            <h5 className='p-2'>${rideOn[0].price}</h5>
                    </div>
                </div>
                }
                <div className='mt-4' style={{textAlign:'center'}}>
                    <Link to='/destinationMap' className='btn btn-primary'>LIVE MAP</Link>
                </div>
            </div>
            <div className='col-md-8'>
                <img src={map} className='map-img' alt=""/>
            </div>
           </div>         
        </div>
    );
};

export default Destination;