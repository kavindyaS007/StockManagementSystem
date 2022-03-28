import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ListElement from "./listElementStore";

const StoreList = () => {
    const [listStores, setListStores] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/stores/getAll")
            .then(({ data }) => {
                setListStores(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return listStores.map((res, i) => {
            console.log(res)
            return <ListElement obj={res} key={i} />
        });
    };

    return(
        <div className="table-wrapper">
            <h2>Stores</h2>
            <Table striped bordered hover>
		        <thead>
		            <tr>
			            <th>Id</th>
			            <th>Store Location</th>
                        <th>Store Capacity</th>
			
		            </tr>
		        </thead>
		        <tbody>
                    {DataTable()}
                </tbody>
	</Table>
        </div>
    )
}

export default StoreList;