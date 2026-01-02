const taskModel = require("../models/task.model");

const findAll = async (req, res) => {
  const tasks = await taskModel.findAll();
  res.success(tasks);
};

const findOne = async (req, res) => {
  const task = await taskModel.findOne(req.params.id);
  if (!task) {
    return res.error(404, "Task not found!");
  }
  res.success(task);
};

const create = async (req, res) => {
  try {
    await taskModel.create(req.body);
    res.success({ message: "Task created!" }, 201);
  } catch (error) {
    res.error(424, "Create task failed!");
  }
};

const update = async (req, res) => {
  const task = await taskModel.update(req.params.id, req.body);
  if (!task) return res.error(404, "Cannot edit");
  res.success(task, 204);
};

const destroy = async (req, res) => {
  const task = await taskModel.findOne(req.params.id);
  if (!task) {
    return res.error(404, "Task not found!");
  }
  await taskModel.destroy(task.id);
  res.success(task, 204);
};

module.exports = { findAll, findOne, create, update, destroy };
