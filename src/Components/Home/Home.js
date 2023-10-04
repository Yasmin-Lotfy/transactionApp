import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import customers from "../../transactions.json"
import MainTable from '../MainTable/MainTable';
import TransactionNotFound from '../TransactionNotFound/TransactionNotFound';

export default function Home() {
    const [customerAll, setCustomerAll] = useState(null)
    const [emptyTable, setEmptyTable] = useState(true)
    const [notfound, setNotfound] = useState(false);

    useEffect(() => {
        setCustomerAll(customers.customers)
    }, [])
 

   
    function sortAscending() {
        console.log("hi");
        let sortedSpendings = customerAll.sort((p1, p2) => (p1.spending > p2.spending) ? 1 : (p1.spending < p2.spending) ? -1 : 0);
        console.log(sortedSpendings);
        setCustomerAll([...sortedSpendings])
    }



    function sortDscending() {
        let sortedSpendings = customerAll.sort(
            (p1, p2) => (p1.spending < p2.spending) ? 1 : (p1.spending > p2.spending) ? -1 : 0);
        setCustomerAll([...sortedSpendings])

    }
    function searchByName(e){
        console.log(e.target.value);
        let searchName = e.target.value;
      let newArray =   customerAll.filter((customer)=>(
            customer.name.toLowerCase().includes(searchName)
        ))
        console.log(newArray);
        setCustomerAll(newArray)
        if(searchName){
            if(newArray.length>0){
                setCustomerAll(newArray);
                setNotfound(false)
            }else{
                setNotfound(true)
            }
            
        }else{
            setCustomerAll(customers.customers)
            setNotfound(false)


        }
    }
    function searchByTransaction(e){
        let searchTransaction = +e.target.value;
        console.log(searchByTransaction);
       let newArray= customerAll.filter((customer)=>(
            customer.spending == searchTransaction
        ))
        console.log(newArray);
        if(searchTransaction && newArray.length > 0){
            setCustomerAll(newArray);
            setEmptyTable(true)
            setNotfound(false)

        }else if(searchTransaction && newArray.length == 0){
            setNotfound(true)
            setEmptyTable(false)
        }
        
        
        else{
            setCustomerAll(customers.customers);
            setEmptyTable(true)
            setNotfound(false)


        }

    }

  


    return (
        <>
            <div className='col-12 home-content'>
                <div className='pb-3'>
                    <h2 className='py-4 text-center main-color'>Customers Transactions / Week</h2>
                    <div className="search-inputs ">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-5">
                                <input onInput={(e)=>searchByName(e)} type="text" className='my-2 mx-2 form-control' placeholder='Filter by Customer Name' />

                            </div>
                            <div className="col-md-5">
                                <input onInput={(e)=>searchByTransaction(e)} type="number" className='my-2 mx-2 form-control' placeholder='Filter by Transaction Amount' />

                            </div>
                            <div className="col-md-2">
                                <form >
                                    <fieldset>
                                        <legend className='fs-6 mb-0 '>Sort Tx by:</legend>
                                        <input onChange={() => sortAscending()} type="radio" id="ascending" name="sort" value="CSS" />
                                        <label className='ms-2' htmlFor="ascending"> Ascending</label><br />
                                        <input onChange={() => sortDscending()} type="radio" id="descending" name="sort" value="JavaScript" />
                                        <label className='ms-2' htmlFor="descending"> Descending</label>
                                    </fieldset>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
                <div className="table-data table-hover table-responsive mt-3 w-100">
                    <table className='table text-start table-striped  w-100'>
                        <thead>
                            <tr className='w-100 '>
                                <th>UserName</th>
                                <th>UserEmail</th>
                                <th>Income</th>
                                <th>Transactions/Week</th>
                                <th>Balance</th>
                                <th>Chart</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MainTable customerAll={customerAll} emptyTable={emptyTable} />



                        </tbody>




                    </table>
                </div>
            </div>
            <TransactionNotFound notfound={notfound} />
        </>
    )
}
