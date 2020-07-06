const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  address: {
    number: {
      type: String
    },
    street: {
      type: String
    },
    district: {
      type: String
    },
    province: {
      type: String
    },
    zipCode: {
      type: String
    }
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  allergy: {
    type: [String]
  },
  medication: {
    type: [String]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Form = mongoose.model("form", FormSchema);
