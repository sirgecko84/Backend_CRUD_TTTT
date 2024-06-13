import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();
// Khai báo các đường link
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    router.get('/crudClass', homeController.getCRUDClass);

    router.post('/post-crudClass', homeController.postCRUDClass);
    router.get('/get-crudClass', homeController.displayGetCRUDClass);
    router.get('/edit-crudClass', homeController.getEditCRUDClass);
    router.post('/put-crudClass', homeController.putCRUDClass);
    router.get('/delete-crudClass', homeController.deleteCRUDClass)

    return app.use("/", router);
}

module.exports = initWebRoutes