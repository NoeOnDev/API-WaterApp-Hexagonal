"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/infrastructure/routes/streetRoutes.ts
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const StreetController_1 = require("../controllers/StreetController");
const streetValidation_1 = require("../middleware/validation/streetValidation");
const validationHandler_1 = require("../middleware/validation/validationHandler");
const streetController = tsyringe_1.container.resolve(StreetController_1.StreetController);
const router = (0, express_1.Router)();
router.post('/streets', streetValidation_1.validateStreet, validationHandler_1.validationHandler, (req, res) => streetController.create(req, res));
router.get('/streets/:id', (req, res) => streetController.getById(req, res));
router.get('/streets', (req, res) => streetController.getAll(req, res));
exports.default = router;
