import React, { useState, useEffect } from "react"
import axios from 'axios'
import StockForm from "./stockForm"

const AddStock = () => {

    const [formValues, setFormValues] = useState({item: '', store: '', date: '', count: ''})
    const [listItems, setListItems] = useState([]);
    const [listStores, setListStores] = useState([]);

    const onSubmit = stockObject => {

        stockObject.item = listItems.find(item => item.id == stockObject.item);
        stockObject.store = listStores.find(item => item.id == stockObject.store);
        
        axios.post(
            'http://localhost:8080/stocks/add', stockObject
        ).then(res => {
            if(res.status === 200)
                alert('Stock added successfully')
            else
                Promise.reject()
        })
        .catch(err => console.log(err))
    }

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
        <StockForm initialValues={formValues} 
            onSubmit={onSubmit}
            enableReinitialize>
                Add/Remove Stock
        </StockForm>
    )
}
export default AddStock