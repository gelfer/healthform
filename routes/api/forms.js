const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const Form = require("../../models/Form");

// Private
// api/forms
// Create form

router.post(
  "/",
  [
    auth,
    [
      check("firstName", "First name is required")
        .not()
        .isEmpty(),
      check("lastName", "Last name is required")
        .not()
        .isEmpty(),
      check("dateOfBirth", "Date of birth is required")
        .not()
        .isEmpty(),
      check("phone", "Phone number is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone,
      allergy,
      medication,
      number,
      street,
      district,
      province,
      zipCode
    } = req.body;

    // Build form object
    const formFields = {};

    formFields.user = req.user.id;

    if (firstName) {
      formFields.firstName = firstName;
    }

    if (lastName) {
      formFields.lastName = lastName;
    }

    if (dateOfBirth) {
      formFields.dateOfBirth = dateOfBirth;
    }

    if (email) {
      formFields.email = email;
    }

    if (phone) {
      formFields.phone = phone;
    }

    if (allergy) {
      formFields.allergy = allergy.split(",").map(el => el.trim());
    }

    if (medication) {
      formFields.medication = medication.split(",").map(el => el.trim());
    }

    // Build address object

    formFields.address = {};

    if (number) {
      formFields.address.number = number;
    }

    if (street) {
      formFields.address.street = street;
    }

    if (district) {
      formFields.address.district = district;
    }

    if (province) {
      formFields.address.province = province;
    }

    if (zipCode) {
      formFields.address.zipCode = zipCode;
    }

    try {
      // Create
      let form = new Form(formFields);

      await form.save();
      res.json(form);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

// Private
// api/forms/:id
// Update form

router.post(
  "/:id",
  [
    auth,
    [
      check("firstName", "First name is required")
        .not()
        .isEmpty(),
      check("lastName", "Last name is required")
        .not()
        .isEmpty(),
      check("dateOfBirth", "Date of birth is required")
        .not()
        .isEmpty(),
      check("phone", "Phone number is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstName,
      lastName,
      dateOfBirth,
      email,
      phone,
      allergy,
      medication,
      number,
      street,
      district,
      province,
      zipCode
    } = req.body;

    // Build form object
    const formFields = {};

    formFields.user = req.user.id;

    if (firstName) {
      formFields.firstName = firstName;
    }

    if (lastName) {
      formFields.lastName = lastName;
    }

    if (dateOfBirth) {
      formFields.dateOfBirth = dateOfBirth;
    }

    if (email) {
      formFields.email = email;
    }

    if (phone) {
      formFields.phone = phone;
    }

    if (allergy) {
      formFields.allergy = allergy.split(",").map(el => el.trim());
    }

    if (medication) {
      formFields.medication = medication.split(",").map(el => el.trim());
    }

    // Build address object

    formFields.address = {};

    if (number) {
      formFields.address.number = number;
    }

    if (street) {
      formFields.address.street = street;
    }

    if (district) {
      formFields.address.district = district;
    }

    if (province) {
      formFields.address.province = province;
    }

    if (zipCode) {
      formFields.address.zipCode = zipCode;
    }

    try {
      // Update
      let form = await Form.findOneAndUpdate(
        { _id: req.params.id },
        { $set: formFields },
        { new: true }
      );

      res.json(form);
    } catch (err) {
      res.status(500).send("Server Error");
    }
  }
);

// Private
// api/forms
// Get all forms

router.get("/", auth, async (req, res) => {
  try {
    const forms = await Form.find().sort({ date: -1 });
    res.json(forms);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// Private
// api/forms/:id
// Get form by id

router.get("/:id", auth, async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ msg: "Form not found." });
    }
    res.json(form);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Form not found." });
    }
    res.status(500).send("Server Error");
  }
});

// Private
// api/forms/:id
// Delete form

router.delete("/:id", auth, async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);

    if (!form) {
      return res.status(404).json({ msg: "Form not found" });
    }

    await form.remove();

    res.json({ msg: "Form deleted." });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Form not found." });
    }
    res.status(500).send("Server Error");
  }
});

module.exports = router;
