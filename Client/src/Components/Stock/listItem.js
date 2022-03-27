import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ListElement from "./listElementItem";

const ItemList = () => {
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/items/getAll")
            .then(({ data }) => {
                setListItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return listItems.map((res, i) => {
            console.log(res)
            return <ListElement obj={res} key={i} />
        });
    };

    return(
        <div className="table-wrapper">
            <Table striped bordered hover>
		        <thead>
		            <tr>
			            <th>Id</th>
			            <th>Item Name</th>
			
		            </tr>
		        </thead>
		        <tbody>
                    {DataTable()}
                </tbody>
	</Table>
        </div>
    )
}

export default ItemList;