import express from "express";


let configViewEngine = (app) => {
    app.use(express.static("./src/public")) // các file ảnh chỉ lấy từ folder public
    app.set("view engine", "ejs"); // sử dụng view engine là ejs
    app.set("views", "./src/view") // các file view chỉ lấy từ folder view
}

module.exports = configViewEngine;