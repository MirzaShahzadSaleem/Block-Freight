import React from 'react'
import "./sidebar.css"
import LineStyleIcon  from '@material-ui/icons/LineStyle';
import TimelineIcon  from '@material-ui/icons/Timeline';
import TrendingUpIcon  from '@material-ui/icons/TrendingUp';
import { Link } from "react-router-dom";


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                  <Link to="/" className="link">
                    <li className='sidebarListItem active'>
                       <LineStyleIcon className='sidebarIcon'/>  
                       Home
                    </li>
                    </Link>
                   
                    <h3 className='sidebarTitle'>Driver</h3>
                    <Link to="/driver" className="link">
                    <li className='sidebarListItem'>
                     <TimelineIcon className='sidebarIcon'/>  
                       Register New Driver
                    </li>  
                    </Link> 
                    <Link to="/ViewDriver" className="link">
                    <li className='sidebarListItem'>
                       <TrendingUpIcon className='sidebarIcon'/>  
                       View Driver Record
                    </li>
                    </Link>
                    
                    <Link to="/DriverRecord" className="link">
                    <li className='sidebarListItem'>
                    <TrendingUpIcon className='sidebarIcon'/>  
                    View All Drivers
                   </li>
                   </Link>


                     <h3 className='sidebarTitle'>Trip</h3>
                     <Link to="/trip" className="link">
                     <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon'/>  
                    Create New Trip
                    </li> 
                    </Link>

                    <Link to="/AssignTrip" className="link">
                    <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon'/>  
                    Assign Trip To Driver
                    </li> 
                    </Link>
                    
                    <Link to="/EndTrip" className="link">
                    <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon'/>  
                    End Trip
                    </li> 
                    </Link>
                    
                    <Link to="/ViewTripRecord" className="link">
                    <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon'/>  
                    View Trip Record
                    </li>
                    </Link>
                    
                    <Link to="/ViewAllTrip" className="link">
                    <li className='sidebarListItem'>
                    <TimelineIcon className='sidebarIcon'/>  
                    View All Trips
                    </li>  
                    </Link>

                </ul>
               
            </div>

           
       
        </div>
    </div>
    
  )
}

export default Sidebar