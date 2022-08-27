import {useState} from 'react';
import React from 'react';
import "./driver.css"

export default function driver() {
    const [fName, setfName] = useState('');
    const [lname, setlName] = useState('');
    const [PhoneNo, setPhoneNo] = useState('');
    const [CNIC, setCNIC] = useState('');
    const [vehicleType, setvehicleType] = useState('');
    const [vehicleNo, setvehicleNo] = useState('');
    const [maxLoad, setmaxLoad] = useState('');
 
 
    return (
        
        <div className="main">
        <form>
                <h1> New Driver Registration </h1>
                <br />
  
                <label>First Name:  </label>
                <input type="text" placeholder='First Name' onChange={(event) => {setfName(event.target.value);}} />
                <br />
              
                <label>Last Name:  </label>
                <input type="text" placeholder='Last Name' onChange={(event) => {setlName(event.target.value);}} />
                <br />
              
                <label>Phone No:  </label>
                <input type="text" placeholder='Phone No' onChange={(event) => {setPhoneNo(event.target.value);}} />
                <br />
  
                <label> CNIC Num:  </label>
                <input type="text" placeholder='CNIC Num' onChange={(event) => {setCNIC(event.target.value);}} />
                <br />
              
                <label>VehicleType:  </label>
                <input type="text" placeholder='Vehicle Type' onChange={(event) => {setvehicleType(event.target.value);}} />
                <br />
  
                <label>Vehicle No:  </label>
                <input type="text" placeholder='Vehicle No' onChange={(event) => {setvehicleNo(event.target.value);}} />
                <br />
  
                <label>Max Load:  </label>
                <input type="text" placeholder='Max Load' onChange={(event) => {setmaxLoad(event.target.value);}} />
                <br /><br />
              <button>Save</button>
          </form>
        </div>
  
  )
}

   
// <div className='driver'>
// driver
// </div>