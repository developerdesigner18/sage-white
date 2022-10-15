import formJSON from "./formElement.json";
import { useState, useEffect } from "react";
import Element from "./components/Element";
import { FormContext } from "./FormContext";
import Data from "./FormData.json";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function FormCreate({}) {
  const location = useLocation();
  console.log(location.state,"props");
  const navigate = useNavigate();
  const [data,setData]= useState([])
  const [elements, setElements] = useState(null);
  // useEffect(() => {
  //   setElements(Data[0]);
  // }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    navigate("/");
    console.log(elements, "elelelelele");
  };
  useEffect(()=>{
    axios.get(`http://localhost:5000/`).then(res=>{
    console.log(res.data,"response");  
    setElements(res.data[0])}).catch(err=>console.log(err))
  },[])
  const { formData, _id } = elements ?? {};
  // const { fields, page_label } = elements ?? {};
  console.log(data,"compare");
  console.log(elements,"compare1");

  const handleChange = (idField, event) => {
    const newElements = { ...elements };
    console.log(newElements,event, "newElement");
    newElements.formData.forEach((field) => {
      const { element, id } = field;
      console.log(field, id, idField, "dddddd");
      field?.options &&
        field?.options?.forEach((option) => {
          console.log(
            `optionffffffff`,
            option,
            element,
            event.target.value,
            event.target.checked
          );
          if (option.id === idField && element == "Checkboxes") {
            option["checked"] = event.target.checked;
          }
          if (option.id === idField && element == "RadioButtons") {
            option["checked"] = event.target.checked;
            field["value"] = event.target.value;
          }
        });
        if (id === idField) {
          
          if (element == "Date") {
            field["value"] = event;
          }
        console.log(element,"datetet");

        field["value"] = event.target.value;
      }
      setElements(newElements);
    });
    console.log(elements);
  };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
        <h3>{_id}</h3>
        <form>
          {formData
            ? formData.map((field, i) => <Element key={i} field={field} />)
            : null}
          <button
            type="submit"
            className="btn btn-primary mt-4 ml-auto mr-auto d-block"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </FormContext.Provider>
  );
}

export default FormCreate;
