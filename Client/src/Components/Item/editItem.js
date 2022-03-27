import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemForm from "./itemForm";
import { Link, useParams } from 'react-router-dom';

const EditItem = (props) => {
    const [formValues, setFormValues] = useState({
        id: "",
        itemName: ""
    });
    const { id , itemName} = useParams();
    const onSubmit = (itemObject) => {
        
        axios.put("http://localhost:8080/items/edit/" + id,
            itemObject)
        .then((res) => {
            if(res.status === 200){
                alert("Item successfully updated");
		        props.history.push("/items");
            }else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    useEffect(() => {
        
        console.log(id);
        axios.get("http://localhost:8080/items/" + id
        )
        .then((res) => {
            
            const {id, itemName} = res.data;
            setFormValues({id, itemName});
        })
        .catch((err) => console.log(err));
    }, []);

    return(
        <ItemForm initialValues = {formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Update Item
        </ItemForm>
        //<p>Hi</p>
    );
};

export default EditItem;