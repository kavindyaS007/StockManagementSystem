import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ItemForm from "./itemForm";

const EditItem = (props) => {
    // const {id, itemName} = props.obj;
    const [formValues, setFormValues] = useState({
        id: "",
        itemName: "",
    });

    const onSubmit = (itemObject) => {
        axios.put("http://localhost:8080/items/edit" + 
            props.match.params.id,
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
        axios.get("http://localhost:8080/items/" + props.match.params.id
        )
        .then((res) => {
            const {id, itemName} = res.data;
            setFormValues({id, itemName});
        })
        .catch((err) => console.log(err));
    }, [props.match.params.id]);

    return(
        // <ItemForm initialValues = {formValues}
        //     onSubmit={onSubmit}
        //     enableReinitialize>
        //         Update Item
        // </ItemForm>
        <p>Hi</p>
    );
};

export default EditItem;