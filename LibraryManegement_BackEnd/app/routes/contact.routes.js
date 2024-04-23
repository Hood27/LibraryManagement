const express = require("express");
const contacts = require ("../controllers/contact.controllers");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/count")
    .put(contacts.count);
    
router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

router.route("/login")
    .post(contacts.login);

module.exports = router;