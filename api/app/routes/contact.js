const express = require("express");
const Users = require("../controllers/ContactController");
const router = express.Router();

// get all
router.get("/", Users.GetAll);
// get one
router.get("/:id", Users.GetOne);
// add Users
router.post("/create", Users.Create);
// edit
router.put("/create/:id", Users.Update);
// delete
router.delete("/delete/:id", Users.Delete);

module.exports = router;
