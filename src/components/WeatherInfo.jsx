import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import axios from 'axios';
import { Link } from 'react-router-dom';


const WeatherInfo = () => {

    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = '840c6a7b5fd104f006a30d4f164d3516';

    const getWeather = async () => {
        if (!city) {
            return;
        }

        setError('');
        setWeatherData(null);

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);

            setWeatherData(response.data);
        }
        catch (err) {
            setError('City not found. Please try again.');
        }
    };
    return (
        <>
            <section className="weather py-4">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-4">
                            <Link to="/" className='btn btn-danger'>Back to Home</Link>
                        </div>
                    </div>
                </div>
                <div className="container mb-3">
                    <div className="row mx-auto">
                        <div className="col-12 py-4 text-center ">
                            <h2 className='text-white fw-bold display-5'>🌦️ Today's Weather Forecast</h2>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mx-auto justify-content-center mb-3">
                        <div className="col-md-6">
                            <p className='text-center text-white fs-5'>Get the current weather of any city</p>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className='form-control'
                                    placeholder='Enter city name...'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                <button className='btn btn-danger' onClick={getWeather}>Search</button>
                            </div>
                            {error && <div className='text-warning mt-2'>{error}</div>}
                        </div>
                    </div>

                    {weatherData && (
                        <div className="row justify-content-center mx-auto p-3 weather-card">
                            <div className="col-md-6 text-center text-white">
                                <h3 className="fs-2">
                                    {weatherData.name},
                                    {weatherData.sys.country}
                                </h3>

                                <p className="fs-5 mb-2 text-muted">
                                    {new Date().toLocaleDateString()}
                                </p>

                                <h2 className='fs-1'>{Math.round(weatherData.main.temp)}°C</h2>
                                <p className="text-capitalize fs-5">{weatherData.weather[0].description}</p>
                                <p className='fs-5'>💨 Wind: {weatherData.wind.speed} m/s</p>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    )
}

export default WeatherInfo;
