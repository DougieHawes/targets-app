import asyncHandler from "express-async-handler";

import Target from "../models/targetModel.js";

export const createTarget = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const target = await Target.create({ text: req.body.text });

  res.status(200).json(target);
});

export const readTargets = asyncHandler(async (req, res) => {
  const targets = await Target.find();

  res.status(200).json(targets);
});

export const updateTarget = asyncHandler(async (req, res) => {
  const target = await Target.findById(req.params.id);

  if (!target) {
    res.status(400);
    throw new Error("target not found");
  }

  const updatedTarget = await Target.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedTarget);
});

export const deleteTarget = asyncHandler(async (req, res) => {
  const target = await Target.findById(req.params.id);

  if (!target) {
    res.status(400);
    throw new Error("target not found");
  }

  await target.remove();

  res.status(200).json({ id: req.params.id });
});
