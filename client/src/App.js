import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Login from "./page/login/Login";
import Required from "./components/Required";
import Contact from "./page/Contact";
import Object from "./page/Object";
import Auth from "./components/Auth";
import Home_page from "./page/admin/home_page";
import Product_page from "./page/admin/product_page";
import Home_admin from "./page/admin/home";
import List_product_component from "./page/admin/list_products";
import Edit_products_page from "./page/admin/edit_products";
import { useEffect, useState } from "react";
import { list_Products } from "./api/products";
import Detail_page from "./page/detail";

function  App() {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        list_Products().then((data) => {
            setProducts(data.data)
        })
    }, [])
    
    // SEARCH
    const handleSearch = (data) => {
        const data_search = products.filter((item) => item.name.toLowerCase() === data)
        setProducts(data_search)
    }

    return ( 
    <div >
        <Routes >
            <Route path = "/"element = { < Auth /> } >
            <Route path = "/" element = { < Login /> }/></Route> 
            <Route path = "/"element = { < Required /> } >
                <Route path = "/home" element = { < Home /> }/> 
                <Route path = "/about" element = { < About /> }/> 
                <Route path = "/contact" element = { < Contact /> }/> 
                <Route path = "/products" element = { < Object setSearch={handleSearch} list_products = {products} /> }/>
                <Route path="/products/:id" element={<Detail_page list_products = {products}/>}/>
            {/* </Route >  */}
            <Route path = "*" element = { < h1 > 404 Not Found </h1>}/>

            {/* Admin */}
            <Route path = "/admin" element = { <Home_page/> }>
                <Route index element={<Home_admin/>}></Route>
                <Route path="products" element={<List_product_component/>}></Route>
                <Route path="products/add" element={<Product_page/>}></Route>
                <Route path="products/edit/:id_product" element={<Edit_products_page/>}></Route>
            </Route>
        </Route>
        </Routes> 
    </div >
        );
    }

    export default App;