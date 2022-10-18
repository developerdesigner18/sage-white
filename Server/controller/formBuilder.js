
const FormBuilder = require("../models/formBuilder");

const getForms = async (req, res) => {
    console.log(req.params.id,"req");
    try {
      const Forms = await FormBuilder.findById({_id: req.params.id });
      res.status(200).json(Forms);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
const createFormBuilder = async (req, res) => {
    console.log(req.body,"intotototo");
    const newForm = new FormBuilder(req.body);
    try {
                await newForm.save();
               
                res
                  .status(200)
                  .json({ message: "Add Successfully!", newForm: newForm });
              } catch (error) {
                res.status(400).json({ message: error.message });
              }
//   if (!validator.isEmail(req.body.email)) {
//     return res.status(400).json({ code: 400, message: "Enter Valid Email!" });
//   } else {
//     const user = await FormBuilder.findOne({ email: req.body.email })
//       .lean()
//       .exec();

//     if (user) {
//       return res.status(403).json({ message: "User Already Existes" });
//     } else {
//       const data = req.body;
//       console.log(data, "data");
//       const newPost = new FormBuilder(data);
//       try {
//         await newPost.save();
//         SendEmail(data.email, data.name);
//         res
//           .status(200)
//           .json({ message: "Registration Successfully!", newPost: newPost });
//       } catch (error) {
//         res.status(400).json({ message: error.message });
//       }
//     }
//   }
};
module.exports = {  createFormBuilder,getForms };
