import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ListElement = (props) => {
    const {id, item, store, date, count} = props.obj;

    const deleteStock = () => {
        axios.delete(
            "http://localhost:8080/stocks/" + id
        ).then((res) => {
            if(res.status === 200) {
                alert("Stock successfully deleted");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    };

    return(
        <tr>
	        <td>{id}</td>
	        <td>{date}</td>
            <td>{item.itemName}</td>
            <td>{store.location}</td>
            <td>{count}</td>
	
	        <td>
		        <Button onClick={deleteStock} size="sm" variant="danger">
		            Delete
		        </Button>
	        </td>
	    </tr>
    );
};
export default ListElement;