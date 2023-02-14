const express = require("express");
const appRoute = express();
const UserController = require("../controller/UserController");
const middleware = require("../middleware/isLogin");

const { list_products } = require("../controller/products/list_products");
const { create_product } = require("../controller/products/create_Products");
const { remove_product } = require("../controller/products/remove_product");
const { update_product } = require("../controller/products/edit_products");
const { detail_product } = require("../controller/products/detail_product");

appRoute.post("/login", UserController.loginUser);
appRoute.get("/profile", middleware.verifyToken, UserController.getProfile);
appRoute.post("/user", UserController.createUser);
appRoute.get("/", (req, res) => {
  res.send("Hello World!");
});

appRoute.get('/products', list_products)
appRoute.post('/products', create_product)
appRoute.delete('/products/:id', remove_product)
appRoute.patch('/products/:id', update_product)
appRoute.get('/products/:id', detail_product)
appRoute.get("/sendfb")



module.exports = appRoute;
