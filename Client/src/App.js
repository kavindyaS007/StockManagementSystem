import React from "react"

import {Nav, Navbar, Container, Row, Col} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from "./Components/Home"
import AddItem from "./Components/Item/addItem"
import ItemList from "./Components/Item/listItem"
import EditItem from "./Components/Item/editItem"
import AddStore from "./Components/Store/addStore"
import StoreList from "./Components/Store/listStore"
import EditStore from "./Components/Store/editStore"


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to = {"/home"} className="nav-link">Stock Management System</Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/items"} className="nav-link">Items</Link>
                </Nav>
                <Nav>
                  <Link to={"/add-items"} className="nav-link">Add Item</Link>
                </Nav>
                <Nav>
                  <Link to={"/stores"} className="nav-link">Stores</Link>
                </Nav>
                <Nav>
                  <Link to={"/add-stores"} className="nav-link">Add Store</Link>
                </Nav>
                <Nav>
                  <Link to={"/stocks"} className="nav-link">Stocks</Link>
                </Nav>
                <Nav>
                  <Link to={"/add-stocks"} className="nav-link">Update Stock</Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/home" element={<Home/>}/>

                  <Route path="/items" element={<ItemList/>}/>
                  <Route path="/add-items" element={<AddItem/>}/>
                  <Route path="/edit-item/:id" element={<EditItem/>} />

                  <Route path="/stores" element={<StoreList/>}/>
                  <Route path="/add-stores" element={<AddStore/>}/>
                  <Route path="/edit-store/:id" element={<EditStore/>} />
                  
                  <Route path="/stocks" element={<Home/>}/>
                  <Route path="/add-stocks" element={<Home/>}/>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    </Router>
  );
};

export default App;