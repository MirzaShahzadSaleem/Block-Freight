import "./featuredInfo.css"
import ArrowDownwardIcon  from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon  from '@material-ui/icons/ArrowUpward';
import React from "react";


export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle"> Total Drivers</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
        <span className="featuredTitle"> Total Trips</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">231,715</span>
            <span className="featuredMoneyRate">-7.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
    </div>

    <div className="featuredItem">
    <span className="featuredTitle"> Active Trips</span>
    <div className="featuredMoneyContainer">
        <span className="featuredMoney">10,415</span>
        <span className="featuredMoneyRate">+2.4 <ArrowUpwardIcon className="featuredIcon"/></span>
    </div>
    <span className="featuredSub">Compared to last month</span>
</div>
    </div>
  )
}

