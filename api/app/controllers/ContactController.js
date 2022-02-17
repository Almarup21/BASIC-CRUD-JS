const { findById } = require("../models/ContactModel");
const Users = require("../models/ContactModel");

// Get all
exports.GetAll = async (req, res) => {
  const User = await Users.find();
  res.send(User);
};

// Create data

exports.Create = async (req, res) => {
  const User = new Users({
    username: req.body.username,
    email: req.body.email,
    nohp: req.body.nohp,
  });

  await User.save()
    .then((result) => {
      res.status(201).json({
        message: result || "User added",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Get one

exports.GetOne = async (req, res) => {
  const id = req.params.id;

  await Users.findById(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Not found",
      });
    });
};
// if (Users._id === req.params._id) {
//   await Users.findById({
//     id: req.params._id,
//   })
//     .then((result) => {
//       res.status(201).send(result);
//     })
//     .catch((err) => {
//       res.status(409).send({
//         message: err.message || "not found",
//       });
//     });
// } else {
//   res.send(await Users.find());
// }

// Update

exports.Update = async (req, res) => {
  const id = req.params.id;

  await Users.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(500).send({
          message: err.message || "Not Found",
        });
      }
      res.send({
        message: "Data Updated",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "error",
      });
    });
};

// Delete

exports.Delete = async (req, res) => {
  const id = req.params.id;
  await Users.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(401).send({
        message: err.message || "Some error while REMOVE post",
      });
    });
};
