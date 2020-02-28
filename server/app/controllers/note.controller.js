const mongoose = require("mongoose");
// const CompanyForm = mongoose.model("companyForms");
// const OfficeForm = mongoose.model("officeForms");
const Forms = require("../models/form.model");
const CompanyForm = Forms.CompanyForm;
const OfficeForm = Forms.OfficeForm;

/****** Company Form  *******/

// Create a new Company Form
exports.createCompany = (req, res) => {
  const { body } = req;

  // Validate request
  if (!body.name) {
    return res.status(400).send({
      message: "Name can not be empty"
    });
  }
  if (!body.address) {
    return res.status(400).send({
      message: "Address can not be empty"
    });
  }
  if (!body.revenue) {
    return res.status(400).send({
      message: "Revenue can not be empty"
    });
  }
  if (!body.phoneCode) {
    return res.status(400).send({
      message: "Phone Code can not be empty"
    });
  }
  if (!body.phoneNumber) {
    return res.status(400).send({
      message: "Phone Number can not be empty"
    });
  }

  // Create a Form
  const form = new CompanyForm({
    name: body.name,
    address: body.address,
    revenue: body.revenue,
    phoneCode: body.phoneCode,
    phoneNumber: body.phoneNumber
  });

  // Save form in the database
  form
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Form"
      });
    });
};

// Retrieve and return all company lists from the database.
exports.findAllCompany = (req, res) => {
  CompanyForm.find()
    .then(forms => res.send(forms))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving forms."
      });
    });
};

// Retrieve a single Company with companyId
exports.findOneCompany = (req, res) => {
  CompanyForm.findById(req.params.companyId)
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Company not found with id " + req.params.companyId
        });
      }
      res.send(form);
    })
    .catch(err => {
      if (err.kind === "Objected") {
        return res.status(404).send({
          message: "Company not found with id " + req.params.companyId
        });
      }
      return res.status(500).send({
        message: "Error retrieving form with id " + req.params.companyId
      });
    });
};

// Update a Company Form with companyId
exports.updateCompany = (req, res) => {
  const { body } = req;

  //Validate request

  if (!body.name) {
    return res.status(400).send({
      message: "Name can not be empty"
    });
  }
  if (!body.address) {
    return res.status(400).send({
      message: "Address can not be empty"
    });
  }
  if (!body.revenue) {
    return res.status(400).send({
      message: "Revenue can not be empty"
    });
  }
  if (!body.phoneCode) {
    return res.status(400).send({
      message: "Phone Code can not be empty"
    });
  }
  if (!body.phoneNumber) {
    return res.status(400).send({
      message: "Phone Number can not be empty"
    });
  }

  CompanyForm.findByIdAndUpdate(
    req.params.companyId,
    {
      name: body.name,
      address: body.address,
      revenue: body.revenue,
      phoneCode: body.phoneCode,
      phoneNumber: body.phoneNumber
    },
    { new: true }
  )
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Company Form not found with id " + req.params.companyId
        });
      }
      res.send(form);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Company Form not found with id " + req.params.companyId
        });
      }
      return res.status(500).send({
        message: "Error updating form with id " + req.params.companyId
      });
    });
};

// Delete a Company with specified companyId
exports.deleteCompany = (req, res) => {
  CompanyForm.findByIdAndRemove(req.params.companyId)
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Company Form not found with id " + req.params.companyId
        });
      }
      res.send({ message: "Company Form deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Company Form not found with id " + req.params.companyId
        });
      }
      return res.status(500).send({
        message: "Could not delete form with id " + req.params.companyId
      });
    });
};

/****** Office Form  *******/

// Create a new Office Form
exports.createOffice = (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).send({
      message: "Name can not be empty"
    });
  }
  if (!body.latitude) {
    return res.status(400).send({
      message: "Latitude can not be empty"
    });
  }
  if (!body.longitude) {
    return res.status(400).send({
      message: "Longitude can not be empty"
    });
  }
  if (!body.officeDate) {
    return res.status(400).send({
      message: "Office Start Date can not be empty"
    });
  }
  const form = new OfficeForm({
    name: body.name,
    latitude: body.latitude,
    longitude: body.longitude,
    officeDate: body.officeDate
  });

  form
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the Form"
      });
    });
};

// // Retireve and return all Office lists from the database.
exports.findAllOffice = (req, res) => {
  OfficeForm.find()
    .then(forms => res.send(forms))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving forms."
      });
    });
};

// Retirieve a single Office with  officeId
exports.findOneOffice = (req, res) => {
  OfficeForm.findById(req.params.officeId)
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Company not found with id " + req.params.companyId
        });
      }
      res.send(form);
    })
    .catch(err => {
      if (err.kind === "Objected") {
        return res.status(404).send({
          message: "Company not found with id " + req.params.companyId
        });
      }
      return res.status(500).send({
        message: "Error retrieving form with id " + req.params.companyId
      });
    });
};

// Update an Office Form with  officeId
exports.updateOffice = (req, res) => {
  const { body } = req;

  if (!body.name) {
    return res.status(400).send({
      message: "Name can not be empty"
    });
  }
  if (!body.latitude) {
    return res.status(400).send({
      message: "Latitude can not be empty"
    });
  }
  if (!body.longitude) {
    return res.status(400).send({
      message: "Longitude can not be empty"
    });
  }
  if (!body.officeDate) {
    return res.status(400).send({
      message: "Office Start Date can not be empty"
    });
  }

  OfficeForm.findByIdAndUpdate(
    req.params.officeId,
    {
      name: body.name,
      latitude: body.latitude,
      longitude: body.longitude,
      officeDate: body.officeDate
    },
    { new: true }
  )
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Office Form not found with id " + req.params.officeId
        });
      }
      res.send(form);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "Office Form not found with id " + req.params.officeId
        });
      }
      return res.status(500).send({
        message: "Error updating form with id " + req.params.officeId
      });
    });
};

// Delete an Office with companyId and OfficeId
exports.deleteOffice = (req, res) => {
  OfficeForm.findByIdAndRemove(req.params.officeId)
    .then(form => {
      if (!form) {
        return res.status(404).send({
          message: "Office Form not found with id " + req.params.officeId
        });
      }
      res.send({ message: "Company Form deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Office Form not found with id " + req.params.officeId
        });
      }
      return res.status(500).send({
        message: "Could not delete form with id " + req.params.officeId
      });
    });
};
