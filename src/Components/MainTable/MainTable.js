import React from 'react'
import { Link } from 'react-router-dom'

export default function MainTable({ customerAll , emptyTable  }) {
    return (
        <>
       {emptyTable &&  
        customerAll?.map((customer) => (

            <tr key={customer?.id}>
                <td>
                    <Link to={`profile/${customer?.id}`} >
                        {customer.name}
                    </Link>
                </td>
                <td>
                    <Link to={`profile/${customer.id}`} >
                        {customer.email}
                    </Link>
                </td>
                <td>
                    <Link to={`profile/${customer.id}`} >
                        {customer.income} EGP
                    </Link>

                </td>
                <td>
                    <Link to={`profile/${customer.id}`} >
                        {customer.spending} EGP
                    </Link>

                </td>
                <td>
                    <Link to={`profile/${customer.id}`} >
                        {+customer.income - +customer.spending} EGP
                    </Link>

                </td>
                <td>
                    <Link to={`profile/${customer.id}`} >
                        <button className='btn sec-bg'>Chart</button>
                    </Link>
                </td>
            </tr>

        ))
       }
           
        </>
    )
}
