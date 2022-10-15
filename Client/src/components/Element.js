import React from "react";
import Checkbox from "./elements/Checkbox";
import TextInput from "./elements/TextInput";
import Dropdown from "./elements/Dropdown";
import RadioButton from "./elements/RadioButton";
import TextArea from "./elements/TextArea";
import Email from "./elements/Email";
import NumberInput from "./elements/NumberInput";
import RatingComponent from "./elements/Rating";
import Range from "./elements/Range";
import DateComponent from "./elements/Date";
const Element = ({
  field: {
    id,
    element,
    label,
    required,
    value,
    options,
    numberOfStars,
    max,
    min,
    step,
    maxDate,
    minDate,
  },
}) => {
  console.log(value, "lable");

  switch (element) {
    // case 'text':
    //     return (<Input
    //         field_id={field_id}
    //         field_label={field_label}
    //         field_placeholder={field_placeholder}
    //         field_value={field_value}

    //     />)
    case "Dropdown":
      return (
        <Dropdown
          id={id}
          label={label?.blocks[0]?.text}
          placeholder=""
          value={value}
          options={options}
        />
      );
    case "Checkboxes":
      return (
        <Checkbox
          id={id}
          label={label?.blocks[0]?.text}
          value={value}
          options={options}
        />
      );
    case "RadioButtons":
      return (
        <RadioButton
          id={id}
          label={label?.blocks[0]?.text}
          value={value}
          options={options}
        />
      );
    case "TextInput":
      return <TextInput id={id} label={label?.blocks[0]?.text} value={value} />;
    case "NumberInput":
      return (
        <NumberInput id={id} label={label?.blocks[0]?.text} value={value} />
      );
    case "Email":
      return <Email id={id} label={label?.blocks[0]?.text} value={value} />;
    case "TextArea":
      return <TextArea id={id} label={label?.blocks[0]?.text} value={value} />;
    case "HyperLink":
      return <TextArea id={id} label={label?.blocks[0]?.text} value={value} />;
    case "Rating":
      return (
        <RatingComponent
          id={id}
          label={label?.blocks[0]?.text}
          value={value}
          numberOfStars={numberOfStars}
        />
      );
    case "Range":
      return (
        <Range
          id={id}
          label={label?.blocks[0]?.text}
          value={value}
          min={min}
          max={max}
          step={step}
        />
      );
    case "Date":
      return (
        <DateComponent
          id={id}
          label={label?.blocks[0]?.text}
          value={value}
          maxDate={maxDate}
          minDate={minDate}
        />
      );

    default:
      return null;
  }
};

export default Element;
