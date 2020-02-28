module.exports = app => {
  const forms = require("../controllers/note.controller");

  /****** Company Form  *******/

  // create a new Company Form
  app.post("/forms/company", forms.createCompany);

  // Retireve all Company lists
  app.get("/forms/company", forms.findAllCompany);

  // Retrieve a single Company with companyId
  app.get("/forms/company/:companyId", forms.findOneCompany);

  // Update a Company Form with companyId
  app.put("/forms/company/:companyId", forms.updateCompany);

  // Delete a Company with companyId
  app.delete("/forms/company/:companyId", forms.deleteCompany);

  /****** Office Form  *******/

  // create a new Office Form
  app.post("/forms/company/:companyId/office", forms.createOffice);

  // Retireve all Office lists
  app.get("/forms/company/:companyId/office", forms.findAllOffice);

  // Retirieve a single Office with companyId and officeId
  app.get("/forms/company/:companyId/office/:officeId", forms.findOneOffice);

  // Update an Office Form with companyId, and officeId
  app.put("/forms/company/:companyId/office/:officeId", forms.updateOffice);

  // Delete an Office with companyId and OfficeId
  app.delete("/forms/company/:companyId/office/:officeId", forms.deleteOffice);
};
