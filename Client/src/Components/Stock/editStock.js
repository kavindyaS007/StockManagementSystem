import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StockForm from "./stockForm";

const EditStock = (props) => {
    
    const [formValues, setFormValues] = useState({
        id: "",
        item: "",
        store: "",
        date: "",
        count: "",
    });

    const { id , item, store, date, count } = useParams();

    const onSubmit = (stockObject) => {
        axios.put("http://localhost:8080/stocks/edit" + id,
            stockObject)
        .then((res) => {
            if(res.status === 200){
                alert("Stocks successfully updated");
		        props.history.push("/stocks");
            }else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        axios.get("http://localhost:8080/stocks/" + id
        )
        .then((res) => {
            const {id, item, store, date, count} = res.data;
            setFormValues({id, item, store, date, count});
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <StockForm initialValues = {formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Update Stock Entry
        </StockForm>
    );
};

export default EditStock;