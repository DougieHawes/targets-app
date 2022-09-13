import asyncHandler from "express-async-handler";

export const createTarget = asyncHandler(async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }

  res.status(200).json({ msg: "CREATE target" });
});

export const readTargets = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "READ targets" });
});

export const updateTarget = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `UPDATE target ${req.params.id}` });
});

export const deleteTarget = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `DELETE target ${req.params.id}` });
});
