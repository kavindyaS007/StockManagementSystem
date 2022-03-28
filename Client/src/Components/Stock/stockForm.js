import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, Select } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const StockForm = (props) => {
    const validationSchema = Yup.object().shape({
        item: Yup.number().required("Required"),
        store: Yup.number().required("Required"),
        date: Yup.date().required("Required"),
        count: Yup.number().required("Required"),
    });
    console.log(props);
    
    const [listItems, setListItems] = useState([]);
    const [listStores, setListStores] = useState([]);
    

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

    

    return(
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label>Item</label>
                        <Field name="item" component="select"  className="form-control">
                            <option value="">--Select an item--</option>
                            { listItems.map((val, index) => {
                                return <option key={index} value={val.id}>{val.itemName}</option>
                                //return itemList.find(item => item.id === val.id)
                            })}
                        </Field>
                        <ErrorMessage name="item" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Store</label>
			            <Field name="store" component="select"  className="form-control">
                            <option value="">--Select an store--</option>
                            { listStores.map((val, index) => {
                                return <option key={index} value={val.id}>{val.location}</option>
                            })}
                        </Field>
                        <ErrorMessage name="store" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Date</label>
			            <Field name="date" type="date" data-date="" data-date-format="YYYY-MM-DD" className="form-control" />
                        <ErrorMessage name="date" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <label>Count</label>
			            <Field name="count" type="number" className="form-control" />
                        <ErrorMessage name="count" className="d-block invalid-feedback" component="span"/>
                    </FormGroup>
                    <br/>
                    <Button variant="danger" size="lg" block="block" type="submit">{props.children}</Button>
                </Form>
            </Formik>
        </div>
    )
}

export default StockForm;