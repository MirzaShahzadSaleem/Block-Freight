import React from 'react'
import "./topbar.css"
import NotificationsIcon  from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';


export default function Topbar() {
  return (
    <div className='topbar'>
       <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>BLOCK FREIGHT</span>
            </div>
            
            <div className='topRight'>
                <div className='topbarIconContainer'>
              <NotificationsIcon/>
              <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
              <LanguageIcon/>
              <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
              <SettingsIcon/>
                </div>

               
            </div>
       </div>
    </div>
  )
}
