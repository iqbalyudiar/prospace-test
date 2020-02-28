const mongoose = require("mongoose");

// Create
const CompanySchema = mongoose.Schema({
  companyId: String,
  name: String,
  address: String,
  revenue: Number,
  phoneCode: Number,
  phoneNumber: Number
});

const OfficeSchema = mongoose.Schema({
  companyId: String,
  officeId: String,
  name: String,
  latitude: Number,
  longitude: Number,
  officeDate: String
});

CompanyForm = mongoose.model("companyForms", CompanySchema);
OfficeForm = mongoose.model("officeForms", OfficeSchema);

module.exports = {
  CompanyForm,
  OfficeForm
};
