import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Holiday = () => {
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = "ZCDAFf2gIhkbQsTpamM9VpmxAK4vG2Qh";

    useEffect(() => {
        const fetchHolidays = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get(
                    `https://calendarific.com/api/v2/holidays?api_key=${API_KEY}&country=IN&year=2025`
                );
                setHolidays(response.data.response.holidays);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to fetch holidays. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchHolidays();
    }, []);

    return (
        <>
            <section className="holidays pt-3 pb-5">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-4">
                            <Link to="/" className='btn btn-outline-danger'>Back to Home</Link>
                        </div>
                    </div>
                </div>
                <div className="container mb-3">
                    <div className="row mx-auto">
                        <div className="col-12 py-4 text-center">
                            <h2 className='fw-bold display-5' ><span style={{ color: "orangered" }}>Indian</span> Public <span style={{ color: "green" }}>Holidays</span></h2>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="container">
                        <div className="row mx-auto justify-content-center">
                            <div className="col-md-6 text-center">
                                <Spinner animation='border' variant='primary' />
                                <p className="pt-2">Fetching Holidays...</p>
                            </div>
                        </div>
                    </div>
                ) : error ? (
                    <div className="container">
                        <div className="row mx-auto">
                            <div className="col-12">
                                <div className="alert alert-warning text-center">{error}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row mx-auto justify-content-center">
                            <div className="col-md-10">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover text-center holiday-table">
                                        <thead className="table-info">
                                            <tr>
                                                <th>#</th>
                                                <th>Date</th>
                                                <th>Holiday</th>
                                                <th>Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {holidays.map((holiday, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{holiday.date.iso}</td>
                                                    <td>{holiday.name}</td>
                                                    <td>{holiday.type.join(", ")}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Holiday;
