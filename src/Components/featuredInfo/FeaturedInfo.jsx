import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward} from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.250,000</span>
                <span className="featuredMoneyRate">
                    -10.25
                    <ArrowDownward className='featuredIcon negative'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Orders</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">Rs.100,000</span>
                <span className="featuredMoneyRate">
                    -7.82
                    <ArrowDownward  className='featuredIcon negative'/>
                    </span>
            </div>
            <span className="featuredSub">Compared to last month</span>
        </div>
    </div>
  )
}
