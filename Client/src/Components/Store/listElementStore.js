import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const ListElement = (props) => {
    const {id, location, capacity} = props.obj;

    const deleteStore = () => {
        axios.delete(
            "http://localhost:8080/stores/" + id
        ).then((res) => {
            if(res.status === 200) {
                alert("Store successfully deleted");
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
	        <td>{location}</td>
            <td>{capacity}</td>
	
	        <td>
		        <Link className="edit-link" to={"/edit-store/" + id}>
		            Edit
		        </Link>
		        <Button onClick={deleteStore} size="sm" variant="danger">
		            Delete
		        </Button>
	        </td>
	    </tr>
    );
};
export default ListElement;