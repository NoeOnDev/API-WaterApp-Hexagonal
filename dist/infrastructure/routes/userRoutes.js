"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const UserController_1 = require("../controllers/UserController");
const userValidation_1 = require("../middleware/validation/userValidation");
const validationHandler_1 = require("../middleware/validation/validationHandler");
const fileUpload_1 = require("../middleware/fileUpload");
const userController = tsyringe_1.container.resolve(UserController_1.UserController);
const router = (0, express_1.Router)();
router.post('/users', fileUpload_1.upload.single('image'), userValidation_1.validateUser, validationHandler_1.validationHandler, (req, res) => userController.create(req, res));
router.get('/users/:id', (req, res) => userController.getById(req, res));
router.get('/users', (req, res) => userController.getAll(req, res));
router.delete('/users/:id', (req, res) => userController.delete(req, res));
router.put('/users/:id', fileUpload_1.upload.single('image'), userValidation_1.validateUser, validationHandler_1.validationHandler, (req, res) => userController.update(req, res));
exports.default = router;
