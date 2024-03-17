import React, { useEffect, useState } from 'react';

export default function Dashboard() {
    const [countDealer, setCountDealer] = useState(0);
    const [countUser, setCountUser] = useState(0);
    const [countCars, setCountCars] = useState(0);

    const dashboardDetails = async () => {
        const token = localStorage.getItem('adminToken');
        const apiUrl = process.env.REACT_APP_API_URL;
        try {
            const response1 = await fetch(`${apiUrl}/api/admin/get-all-dealers`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-Token": token
                },
            });
            const response2 = await fetch(`${apiUrl}/api/admin/get-all-customers`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-Token": token
                },
            });

            const response3 = await fetch(`${apiUrl}/api/admin/get-total-cars`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "auth-Token": token
                },
            });
            const json1 = await response1.json();
            const json2 = await response2.json();
            const json3 = await response3.json();
            
            setCountDealer(json1.length);
            setCountUser(json2.length);
            setCountCars(json3.length);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        dashboardDetails();
    }, []);

    return (
        <>
                <div className='container centered  p-4 rounded-4'>
                    <h1 className='bold'>DASHBOARD</h1>
                    <div className='container mt-5'>
                        <div className="row">
                            <div className="col-lg-4 w-33 border border-5 border-light rounded-5 bg-dark">
                                <h2 className='dfjcac py-3 text-warning bold'>Dealers</h2><hr className='text-warning' />
                                <h4 className='dfjcac py-4 text-light fs-1'>{countDealer} &nbsp; <a className='text-primary fs-6 mt-3 cursor-pointer'></a></h4>
                            </div>
                            <div className="col-lg-4 w-33 border border-5 border-light rounded-5 bg-dark">
                                <h2 className='dfjcac py-3 text-info bold'>Customers</h2><hr className='text-info' />
                                <h4 className='dfjcac py-4 text-light fs-1'>{countUser} &nbsp; <a className='text-primary fs-6 mt-3 cursor-pointer'></a></h4>
                            </div>
                            <div className="col-lg-4 w-33 border border-5 border-light rounded-5 bg-dark">
                                <h2 className='dfjcac py-3 text-green-light bold'>Total Cars</h2><hr className='text-green-light' />
                                <h4 className='dfjcac py-4 text-light fs-1'>{countCars} &nbsp; <a className='text-primary fs-6 mt-3 cursor-pointer'></a></h4>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
