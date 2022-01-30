import React,{Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import './map.css'
import { Media } from 'react-bootstrap';

export class GoogleMap extends Component {
    render() {
      return (
        <div className='container '>
            <div className='col-md-8'>
                <Map className='g-map' google={this.props.google} zoom={14}
                 style={{width:'1090px',height:'800px',marginTop:'30px',}}>
                <Marker onClick={this.onMarkerClick}
                 name={'Current location'} />
                </Map>
            </div>
        </div>
      );
    }
  }
export default GoogleApiWrapper({
 apiKey: ("AIzaSyCga6MqLzk7d5ej3pc1YQG4X_o1NulWCbU")
})(GoogleMap)