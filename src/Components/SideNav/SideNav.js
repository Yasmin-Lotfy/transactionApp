import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNav() {
    return (
        <div className='col-2  main-bg vh-100'>
            <Link to="">
            <h4 className='mb-5 py-3' ><span className='main-color '>Monthly </span>Tx App</h4>
            </Link>
            <div className="linked-list main-bg">
                <ul className='list-none'>
                    <li className='my-3'><a href='' className='sec-color '> <i className="fa-solid fa-gauge pe-2"></i>DashBoard</a></li>
                    <li className='my-3'><a href='' className='sec-color '> <i className="fa-solid fa-chart-simple pe-2"></i>Sales Statistics</a></li>
                    <li className='my-3'><a href='' className='sec-color'><i className="fa-regular fa-credit-card pe-2"></i>Payment</a></li>
                    <li className='my-3'><a href='' className='sec-color'><i className="fa-solid fa-tent-arrow-left-right pe-2"></i>Transactions</a></li>
                    <li className='my-3'><a href='' className='sec-color'> <i className="fa-brands fa-product-hunt pe-2"></i>Products</a></li>
                    <li className='my-3'><a href='' className='sec-color'><i className="fa-solid fa-user pe-2"></i>Customers</a></li>
                    <li className='my-3'><a href='' className='sec-color'><i className="fa-solid fa-message pe-2"></i>Messages</a></li>
                    <li className='my-3'><a href='' className='sec-color'><i className="fa-solid fa-gear pe-2"></i>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}
