import React from 'react'
import {useState} from 'react';
import "./trip.css";
import truck from "./../../../images/Pakistani_truck.jpg"
import { Opacity } from '@material-ui/icons';


export default function Trip() {
  const [cuAssignedTo, setcAssignedTo] = useState('');
  const [tripLocation, settripLocation] = useState('');
  const [stDate, setstDate] = useState('');
  const [endDate, setendDate] = useState('');
  const [tripLoad, settripLoad] = useState('');
  const [tripIntiator, settripInitiator] = useState('');
  const [tripReciever, settripReciever] = useState('');
  const [tripStatus, settripStatus] = useState('');
  return (
    
    
    <div className="trip" style={{ backgroundImage:  `url(${truck})` ,
    
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '89.5vh',
    opacity: 0.5,
   

}}>
    
      <form >
     
              <h1 className='h1'> Create New Trip </h1>
              <br />

              <label className='label'>Assigned To:  </label>
              <input type="text" placeholder='Current Assigned To' onChange={(event) => {setcAssignedTo(event.target.value);}} />
            
              <label className='label'>Trip Location:  </label>
              <input type="text" placeholder='Trip Location' onChange={(event) => {settripLocation(event.target.value);}} />
              <br />
            
              <label className='label'>Start Date:  </label>
              <input type="text" placeholder='Start Date' onChange={(event) => {setstDate(event.target.value);}} />

              <label className='label'>End Date:  </label>
              <input type="text" placeholder='End Date' onChange={(event) => {setendDate(event.target.value);}} />
              <br />
            
              <label className='label'>Trip Load:  </label>
              <input type="text" placeholder='Trip Load' onChange={(event) => {settripLoad(event.target.value);}} />

              <label className='label'>Trip Initiator:  </label>
              <input type="text" placeholder='Trip Initiator' onChange={(event) => {settripInitiator(event.target.value);}} />
              <br />

              <label className='label'>Trip Reciever:  </label>
              <input type="text" placeholder='Trip Reciever' onChange={(event) => {settripReciever(event.target.value);}} />

              <label className='label'>Trip Status:  </label>
              <input type="text" placeholder='Trip Status' onChange={(event) => {settripStatus(event.target.value);}} />
              <br /><br />
            <button>Save</button>
        </form>
      </div>
      
  )
}
