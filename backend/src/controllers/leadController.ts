import { Request, Response } from "express";
import Lead from "../models/Lead";

export const getLeads = async (
  req: Request,
  res: Response
) => {
  try {
    const leads = await Lead.find();

    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching leads",
    });
  }
};

export const createLead = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, status } = req.body;

    const lead = await Lead.create({
      name,
      email,
      status,
    });

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: "Error creating lead",
    });
  }
};
export const deleteLead = async (
  req: Request,
  res: Response
) => {

  try {

    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Lead deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete failed",
    });

  }
};
export const updateLead = async (
  req: Request,
  res: Response
) => {

  try {

    const updatedLead =
      await Lead.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!updatedLead) {

      return res.status(404).json({
        message: "Lead not found",
      });

    }

    res.status(200).json(
      updatedLead
    );

  } catch (error) {

    res.status(500).json({
      message: "Update failed",
    });

  }
};