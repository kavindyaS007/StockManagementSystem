import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ListElement = (props) => {
    const {id, itemName} = props.obj;

    const deleteItem = () => {
        axios.delete(
            "http://localhost:8080/items/" + id
        ).then((res) => {
            if(res.status === 200) {
                alert("Item successfully deleted");
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
	        <td>{itemName}</td>
	
	        <td>
		        <Link className="edit-link" to={"/edit-item/" + id}>
		            Edit
		        </Link>
		        <Button onClick={deleteItem} size="sm" variant="danger">
		            Delete
		        </Button>
	        </td>
	    </tr>
    );
};
export default ListElement;