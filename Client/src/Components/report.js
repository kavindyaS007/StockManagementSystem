import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";


const Report = () => {
    const [listItems, setListItems] = useState([]);
    const [listStores, setListStores] = useState([]);
    const [listStocks, setListStocks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/items/getAll")
            .then(({ data }) => {
                setListItems(data);
                console.log(listItems)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/stores/getAll")
            .then(({ data }) => {
                setListStores(data);
                console.log(listStores)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/stocks/getAll")
            .then(({ data }) => {
                setListStocks(data);
                console.log(listStocks)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const viewReport = () => {
        // axios.get(
        //     "http://localhost:8080/stocks/" 
        // )
    };

    return(
        <div className="form-wrapper">
            <h2>Stock Report</h2>
            <br/>
            <form>
                <div className='row form-group'>
                    <div className='col-md-6'>
                        <label>Item</label>
                        <select name='item' className="form-control">
                            <option value="">--Select Item--</option>
                            { listItems.map((val, index) => {
                                return <option key={index} value={val.id}>{val.itemName}</option>
                            })}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label>Store</label>
                        <select name='store' className="form-control">
                            <option value="">--Select Store--</option>
                            { listStores.map((val, index) => {
                                return <option key={index} value={val.id}>{val.location}</option>
                            })}
                        </select>
                    </div>
                </div>
                <br/>
                <div className='row form-group'>
                    <button onClick={viewReport} className='form-control btn btn-success'>View Stock Details</button>
                </div>
            </form>
        </div>
    );
}

export default Report;

