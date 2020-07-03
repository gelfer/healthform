# healthform

This is a simple application to demonstrate the use of MERN (MongoDB, Express.js, React.js, and Node.js). This application allows an admin to sign up and sign in. The admin can create, update, and delete a health form for a patient. A list of all the health forms is displayed in a visually-friendly format for the admin to view. On the list page, the number of forms submitted and a search box are included. The admin can search for a form by some attributes such as name and form id.

Two database collections are needed for this application: User and Form. 
The User collection stores the credential information of an admin as shown below:

  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

The Form collection stores a patient's information such as name and address.

  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  address: [
    {
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
    }
  ],
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

