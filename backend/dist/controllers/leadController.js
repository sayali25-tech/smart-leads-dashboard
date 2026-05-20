"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLead = exports.deleteLead = exports.createLead = exports.getLeads = void 0;
const Lead_1 = __importDefault(require("../models/Lead"));
const getLeads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leads = yield Lead_1.default.find();
        res.status(200).json(leads);
    }
    catch (error) {
        res.status(500).json({
            message: "Error fetching leads",
        });
    }
});
exports.getLeads = getLeads;
const createLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, status } = req.body;
        const lead = yield Lead_1.default.create({
            name,
            email,
            status,
        });
        res.status(201).json(lead);
    }
    catch (error) {
        res.status(500).json({
            message: "Error creating lead",
        });
    }
});
exports.createLead = createLead;
const deleteLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Lead_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Lead deleted",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Delete failed",
        });
    }
});
exports.deleteLead = deleteLead;
const updateLead = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedLead = yield Lead_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedLead) {
            return res.status(404).json({
                message: "Lead not found",
            });
        }
        res.status(200).json(updatedLead);
    }
    catch (error) {
        res.status(500).json({
            message: "Update failed",
        });
    }
});
exports.updateLead = updateLead;
