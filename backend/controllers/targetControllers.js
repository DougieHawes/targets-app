import asyncHandler from "express-async-handler";

import Target from "../models/targetModel.js";
import User from "../models/userModel.js";

export const createTarget = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  const target = await Target.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(target);
});

export const readTargets = asyncHandler(async (req, res) => {
  const targets = await Target.find({ user: req.user.id });

  res.status(200).json(targets);
});

export const updateTarget = asyncHandler(async (req, res) => {
  const target = await Target.findById(req.params.id);

  if (!target) {
    res.status(400);
    throw new Error("target not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (target.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorised");
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

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (target.user.toString() !== user.id) {
    res.status(401);
    throw new Error("user not authorised");
  }

  await target.remove();

  res.status(200).json({ id: req.params.id });
});
