module.exports = (req, res) => {
  return res.status(201).json({
    id: req.body.id,
    content: req.body.content,
    completed: req.body.completed
  });
};
