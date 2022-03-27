import React, { useState, useEffect } from "react"
import axios from 'axios'
import ItemForm from "./itemForm"

const AddItem = () => {

    const [formValues, setFormValues] = useState({itemName: ''})
    const onSubmit = itemObject => {
        axios.post(
            'http://localhost:8080/items/add', itemObject
        ).then(res => {
            if(res.status === 200)
                alert('Item added successfully')
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }

    return(
        <ItemForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Add Item
        </ItemForm>
    )
}
export default AddItem