import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import weatherImg from "../assets/weather-img.jpg";
import movieImg from "../assets/movies-img.jpg";
import holidayImg from "../assets/holiday-img.jpg";
import dictImg from "../assets/dict-img.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="home pb-5">
                <div className="container py-4">
                    <div className="row mx-auto justify-content-center mb-3">
                        <div className="col-md-6 text-center">
                            <h2 className='fw-bold mb-4 text-white'>🌐 MyInfoMate</h2>
                            <h5 className='fs-4 text-danger'>One Place. All the Info You Need.</h5>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mx-auto justify-content-center">
                        <div className="col-md-4 mb-4">
                            <div className='api-card rounded-4 p-3'>
                                <div className="card-img text-center mb-3">
                                    <img
                                        src={weatherImg}
                                        alt="Not Supported"
                                        className='img-fluid rounded-4'
                                    />
                                </div>
                                <div className="card-text text-center">
                                    <p className='fs-4 fw-bold'>🌤️ Weather</p>
                                    <p className='fs-5 fw-bold'>Check current weather by city name.</p>
                                    <Link to="/weather" className='btn btn-outline-danger'>Check Weather</Link>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className='api-card rounded-4 p-3'>
                                <div className="card-img text-center mb-3">
                                    <img
                                        src={movieImg}
                                        alt="Not Supported"
                                        className='img-fluid rounded-4'
                                    />
                                </div>
                                <div className="card-text text-center">
                                    <p className='fs-4 fw-bold'>🎬 Movies</p>
                                    <p className='fs-5 fw-bold'>Discover trending movies and explore what to watch next.</p>
                                    <Link to="/movies" className='btn btn-outline-danger'>Explore Movies</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className='api-card rounded-4 p-3'>
                                <div className="card-img text-center mb-3">
                                    <img
                                        src={holidayImg}
                                        alt="Not Supported"
                                        className='img-fluid rounded-4'
                                    />
                                </div>
                                <div className="card-text text-center">
                                    <p className='fs-4 fw-bold'>🎉 Holidays</p>
                                    <p className='fs-5 fw-bold'>Find upcoming public holidays across India.</p>
                                    <Link to="/holiday" className='btn btn-outline-danger'>Check Holidays</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className='api-card rounded-4 p-3'>
                                <div className="card-img text-center mb-3">
                                    <img
                                        src={dictImg}
                                        alt="Not Supported"
                                        className='img-fluid rounded-4'
                                    />
                                </div>
                                <div className="card-text text-center">
                                    <p className='fs-4 fw-bold'>📖 Dictionary</p>
                                    <p className='fs-5 fw-bold'>Search word meanings and enhance your vocabulary.</p>
                                    <Link to="/dictionary" className='btn btn-outline-danger'>Get Meaning</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
