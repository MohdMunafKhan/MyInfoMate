import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dictionary = () => {
    const [word, setWord] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!word.trim()) return;

        setLoading(true);
        setResult(null);
        setError('');

        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            setResult(res.data[0]);
        } catch (err) {
            setError('Word not found or invalid.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <section className="dict pt-3 pb-5">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-md-4">
                            <Link to="/" className='btn btn-outline-danger'>Back to Home</Link>
                        </div>
                    </div>
                </div>
                <div className="container my-3">
                    <div className="row mx-auto">
                        <div className="col-12 text-center">
                            <h2 className='fw-bold fs-1'>📖 InfoMate Dictionary</h2>
                        </div>
                    </div>
                </div>

                <div className="container py-4">
                    <div className="row mx-auto justify-content-center">
                        <div className="col-md-6">
                            <p className='text-center fs-5'>Enter a word to know it's meaning</p>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter a word..."
                                    value={word}
                                    onChange={(e) => setWord(e.target.value)}
                                />
                                <button className="btn btn-danger" onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                {loading && (
                    <div className="container py-2">
                        <div className="row mx-auto justify-content-center">
                            <div className="col-md-6">
                                <div className="text-center my-4">
                                    <Spinner animation="border" className='text-white' />
                                    <p>Fetching meaning...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="container py-4">
                        <div className="row mx-auto justify-content-center">
                            <div className="col-md-6">
                                <div className="alert alert-warning">{error}</div>
                            </div>
                        </div>
                    </div>
                )}

                {result && (
                    <div className="container">
                        <div className="row mx-auto justify-content-center">
                            <div className="col-md-6">
                                <h3 className='text-danger'>{result.word}</h3>
                                {result.phonetics?.[0]?.text &&
                                    <p>🔊 {result.phonetics[0].text}</p>
                                }
                                {result.meanings.map((meaning, index) => (
                                    <div key={index} className="mb-3">
                                        <h4>{meaning.partOfSpeech}</h4>
                                        <ul>
                                            {meaning.definitions.map((def, i) => (
                                                <li key={i}>
                                                    {def.definition}
                                                    {def.example && (
                                                        <div className="text-white small mt-1">💬 Example: {def.example}</div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Dictionary;
