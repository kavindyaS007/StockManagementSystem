import React, { useState, useEffect } from "react"
import axios from 'axios'
import StoreForm from "./storeForm"

const AddStore = () => {

    const [formValues, setFormValues] = useState({location: '', capacity: ''})
    const onSubmit = storeObject => {
        axios.post(
            'http://localhost:8080/stores/add', storeObject
        ).then(res => {
            if(res.status === 200){
                alert('Store added successfully')
                window.location.reload()
            }
            else
                Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
    }

    return(
        <StoreForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize>
                Add Store
        </StoreForm>
    )
}
export default AddStore