import React, { useState, useEffect } from "react";
import axios from "axios";
import StoreForm from "./storeForm";
import { Link, useParams } from 'react-router-dom';

const EditStore = (props) => {
    const [formValues, setFormValues] = useState({
        id: "",
        location: "",
        capacity: "",
    });

    const { id , location, capacity } = useParams();

    const onSubmit = (itemObject) => {
        axios.put("http://localhost:8080/stores/edit/" + id,
            itemObject)
        .then((res) => {
            if(res.status === 200){
                alert("Store successfully updated");
		        props.history.push("/stores");
            }else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        axios.get("http://localhost:8080/stores/" + id
        )
        .then((res) => {
            const {id, location, capacity} = res.data;
            setFormValues({id, location, capacity});
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <StoreForm initialValues = {formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Update Store
        </StoreForm>
        //<p>Hi</p>
    );
};

export default EditStore;