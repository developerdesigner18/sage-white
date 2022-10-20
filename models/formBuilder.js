const mongoose = require("mongoose");
var formBuilderSchema = mongoose.model("FormBuilder", {
    formData: []
});
module.exports = formBuilderSchema;
