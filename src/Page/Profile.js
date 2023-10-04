import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import customers from "../transactions.json"
import Barchart from '../Components/BarChart/Barchart';



export default function Profile() {

    let { id } = useParams()
    // console.log(+id);
    // console.log(customers.customers[id-1]);
    const [userData, setUserData] = useState({})
    function getUserData() {
        // console.log(id);
        let [x] = customers.customers.filter((customer) => customer.id === id)

        // console.log(x);
        setUserData(x)
    }
    useEffect(() => {
        getUserData()


    }, [])

    return (
        <>
            {userData && <>
                <div className='col-12 py-5'>

                    <div className="mx-auto col-md-6 col-sm-12">
                        <Barchart userData={userData.transactions} />
                    </div>
                    <h2 className='text-center main-color'>User Transaction Table</h2>
                    <div className="table-responsive">
                        <table className='table text-start table-striped '>
                            <thead>
                                <tr className=' '>
                                    <th>UserName</th>
                                    <th>Income</th>
                                    <th>Total Transactions</th>
                                    <th>Day & Amount/Day</th>
                                    <th>Blance</th>
                                </tr>
                            </thead>
                            <tbody className='main-bg '>
                                <tr className=' text-start'>
                                    <td>{userData.name}</td>
                                    <td>{userData.income} EGP</td>
                                    <td>{userData.spending} EGP</td>
                                    <td>
                                        <table>
                                            <tbody>
                                                {userData?.transactions?.map((trans) => (

                                                    Object.values(trans)?.map((element) => (
                                                        <tr>
                                                            <td>
                                                                <p className='mb-0 main-color'> {Object.keys(trans)} :</p>
                                                            </td>
                                                            <td>
                                                                {Object.entries(element).map((tra) => (
                                                                    <p className='mb-0 '>{tra[0]} :<span className='bolder'>{tra[1]} EGP</span> </p>
                                                                ))

                                                                }
                                                            </td>
                                                        </tr>

                                                    ))

                                                ))}

                                            </tbody>
                                        </table>

                                    </td>

                                    <td>{+userData.income - +userData.spending} EGP</td>

                                </tr>

                            </tbody>


                        </table>
                    </div>

                    <div>
                        <Link to="/">
                            <button className='btn sec-bg '>Back to Home</button>
                        </Link>
                    </div>
                </div>





            </>}
        </>
    )
}
