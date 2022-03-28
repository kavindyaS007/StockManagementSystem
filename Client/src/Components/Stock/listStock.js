import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ListElement from "./listElementStock";

const StockList = () => {
    const [listStocks, setListStocks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/stocks/getAll")
            .then(({ data }) => {
                setListStocks(data);
                console.log(listStocks)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const DataTable = () => {
        return listStocks.map((res, i) => {
            console.log(res)
            return <ListElement obj={res} key={i} />
        });
    };

    return(
        <div className="table-wrapper">
            <h2>Stock Entries</h2>
            <Table striped bordered hover>
		        <thead>
		            <tr>
			            <th>Id</th>
			            <th>Stock Date</th>
                        <th>Item</th>
                        <th>Store</th>
                        <th>Count</th>
		            </tr>
		        </thead>
		        <tbody>
                    {DataTable()}
                </tbody>
	</Table>
        </div>
    )
}

export default StockList;