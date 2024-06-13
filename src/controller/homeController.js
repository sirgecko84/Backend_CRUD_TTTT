import db from '../models/index'
import CRUDService from '../service/CRUDService';
let getHomePage = async (req, res) => {
    try { // bắt exception
        let data = await db.User.findAll(); // tìm tất cả dữ liệu trong bảng User
        // console.log('.............')
        //console.log(data) // in ra dữ liệu 
        //console.log('..............')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data) // chuyển data thành dạng string và lưu vào biến 'data', dữ liệu này sẽ được in ra thông qua file homepage.ejs
        });
    } catch (e) {
        console.log(e)
    }



}
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message)
    return res.send('Tao nhan vien thanh cong!');
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('.................')
    console.log(data);
    console.log('...........')
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;

    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        // check user data not found
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('User not found!');
    }
}
let putCRUD = async (req, res) => {
    let data = req.body; // lấy thông tin nhập vào từ giao diện
    let allUser = await CRUDService.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
    } else {
        return res.send('user not found');
    }

    return res.send('delete succeed');
}

let getCRUDClass = (req, res) => {
    return res.render('crudClass.ejs');
}

let postCRUDClass = async (req, res) => {
    let message = await CRUDService.createNewClass(req.body);
    console.log(message)
    return res.send('post crud from sever');
}

let displayGetCRUDClass = async (req, res) => {
    let data = await CRUDService.getAllClass();
    console.log('.................')
    console.log(data);
    console.log('...........')
    return res.render('displayCRUDClass.ejs', {
        dataTable: data
    })
}
let getEditCRUDClass = async (req, res) => {
    let classId = req.query.id;

    if (classId) {
        let classData = await CRUDService.getClassInfoById(classId);
        // check user data not found
        return res.render('editCRUDClass.ejs', {
            lop: classData
        });

    }
    else {
        return res.send('Class not found!');
    }
}
let putCRUDClass = async (req, res) => {
    let data = req.body;
    let allClass = await CRUDService.updateClassData(data);
    return res.render('displayCRUDClass.ejs', {
        dataTable: allClass
    })
}
let deleteCRUDClass = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteClassById(id);
    } else {
        return res.send('user not found');
    }

    return res.send('delete succeed');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
    getCRUDClass: getCRUDClass,
    postCRUDClass: postCRUDClass,
    displayGetCRUDClass: displayGetCRUDClass,
    putCRUDClass: putCRUDClass,
    getEditCRUDClass: getEditCRUDClass,
    deleteCRUDClass: deleteCRUDClass,
}