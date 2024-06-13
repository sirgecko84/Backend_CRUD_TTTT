
import bcrypt from 'bcryptjs';
import db from '../models/index'



const salt = bcrypt.genSaltSync(10); // thuật toán sử dụng để hash password

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Nhanvien.create({
                maNV: data.maNV,
                password: hashPasswordFromBcrypt,
                ten: data.ten,
                gioiTinh: data.gioiTinh === '1' ? true : false,
                cccd: data.cccd,
                ngaySinh: data.ngaySinh,
                email: data.email,
                sdt: data.sdt,
                diaChi: data.diaChi
            })

            resolve('ok create nhanvien succeed!')
        } catch (e) {
            reject(e);
        }
    })


}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt); // thực hiện hash password
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.Nhanvien.findAll({
                raw: true,
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Nhanvien.findOne({
                where: { id: userId },
                raw: true,
            })

            if (user) {
                resolve(user)
            }
            else {
                resolve({})
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Nhanvien.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.ten = data.ten;
                user.sdt = data.sdt;
                user.diaChi = data.diaChi;

                await user.save();

                let allUsers = await db.Nhanvien.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Nhanvien.findOne({
                where: { id: userId }
            })

            if (user) {
                user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
let createNewClass = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Lop.create({
                maLop: data.maLop,
                tenLop: data.tenLop,
                ngayKhaiGiang: data.ngayKhaiGiang,
                ngayKetThuc: data.ngayKetThuc,
                siSo: data.siSo,
            })

            resolve('ok create nhanvien succeed!')
        } catch (e) {
            reject(e);
        }
    })


}

let getAllClass = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let classes = db.Lop.findAll({
                raw: true,
            });
            resolve(classes)
        } catch (e) {
            reject(e)
        }
    })
}

let getClassInfoById = (classId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Lop.findOne({
                where: { id: classId },
                raw: true,
            })

            if (user) {
                resolve(user)
            }
            else {
                resolve({})
            }

        } catch (e) {
            reject(e);
        }
    })
}

let updateClassData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Lop.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.siSo = data.siSo;


                await user.save();

                let allUsers = await db.Lop.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }

        } catch (e) {
            console.log(e);
        }
    })
}
let deleteClassById = (classId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Lop.findOne({
                where: { id: classId }
            })

            if (user) {
                user.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
    createNewClass: createNewClass,
    getAllClass: getAllClass,
    updateClassData: updateClassData,
    getClassInfoById: getClassInfoById,
    deleteClassById: deleteClassById,
}