import React from 'react'

export default function TransactionNotFound({ notfound }) {
    return (
        <>
            {notfound && <>
                <div className="container  text-center ">
                    <div className=' alert alert-danger'>
                        Not Found
                    </div>
                </div>
            </>}

        </>
    )
}
