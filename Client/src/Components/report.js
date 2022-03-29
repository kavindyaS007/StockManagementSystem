import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";


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

    const findSum = () => {
        let sum = 0
        listStocks.map((res, i) => {
            sum = sum + res.count
        });
        return sum;
    }

    const DataTable = () => {
        return listStocks.map((res, i) => {
            //console.log(res)
            return (
                    <tr key={i}>
                        <td>{res.item.itemName}</td>
                        <td>{res.store.location}</td>
                        <td>{res.count}</td>
                    </tr>
                
            );
        });
    };

    const viewReport = stockObject => {
        stockObject.itemName = listStocks.find(item => item.item == listItems.id).itemName
        console.log(listItems.id)
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
                    <button onSubmit={viewReport} className='form-control btn btn-success'>View Stock Details</button>
                </div>
            </form>
            <br/>
            <div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Store Location</th>
                        <th>Stock Updates</th>
                        {/* <th>Stock Count</th> */}
                    </tr>
                </thead>
                <tbody>
                    {DataTable()}
                    <tr>
                        <td></td>
                        <th>Total used store capacity:</th>
                        <th>{findSum()}</th>
                    </tr>
                </tbody>
                    {/* <tr>
                    { listStocks.map((val, index) => {
                        //return <td key={index}>{val.item.itemName}</td>
                            if(val.id == listItems.id){
                                return <td key={index}>{val.item.itemName}</td>
                            }
                        })}
                        
                    </tr> */}
                
            </Table>
            </div>
        </div>
    );
}

export default Report;

