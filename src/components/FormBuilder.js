import React, { useState } from "react";
import { FormBuilder } from "cb-react-forms";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
const toolbarItems = [
  {
    key: "Header",
    name: "Header Text",
    icon: "fa fa-user",
  },
  {
    key: "Paragraph",
    name: "Paragraph",
    icon: "fa fa-paragraph",
  },
];
const FormBuild = () => {
  const navigate = useNavigate();
  const [formResult, setFormResult] = useState([]);
  const onSubmit = (formData) => {
    console.log(JSON.parse(formData), "ffff");
    axios.post('http://localhost:5000/create',{ formData : JSON.parse(formData)}).then(res=>{

      setFormResult(res.data.newForm)
      navigate("/createForm",{replace: true, state : res.data.newForm._id})
    }
    
    ).catch(err=>console.log(err))
  };

  console.log(formResult, "riririririririririr");
  return (
    <FormBuilder
      onSubmit={onSubmit} // function
      // items={toolbarItems} // array of toolbar items
    />
  );
};

export default FormBuild;
