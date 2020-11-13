module.exports = (req, res) => res.status(200).json(
  [
    {
      "id": 1,
      "content": "Learn React",
      "completed": false
    }, 
    {
      "id": 2,
      "content": "Learn Redux",
      "completed": false
    }, 
    {
      "id": 3,
      "content": "Learn Hook",
      "completed": false
    }, 
  ]
);
