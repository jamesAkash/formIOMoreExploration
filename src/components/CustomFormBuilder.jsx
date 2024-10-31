import React, { useState } from "react";
import { FormBuilder } from "@formio/react";
import "formiojs/dist/formio.full.css";
import { Components } from "formiojs";

import MyEmailComponent from "./MyEmailComponent";
import MyTextComponent from "./MyTextComponent";

Components.addComponent("myEmailComponent", MyEmailComponent);
Components.addComponent("myTextComponent", MyTextComponent);

const CustomFormBuilder = () => {
  const [formSchema, setFormSchema] = useState({});

  const options = {
    builder: {
      custom: {
        title: "Custom Components",
        default: true,
        components: {
          myEmailComponent: true,
          MyTextComponent: true,
        },
      },
      basic: false,
      advanced: false,
      layout: false,
      data: false,
      premium: false,
    },
  };

  const onChange = (schema) => {
    setFormSchema(schema);
    console.log("Form Schema:", schema);
  };

  const onSave = () => {
    console.log("Saved Form Schema:", formSchema);
  };

  return (
    <div>
      <h2>Custom Form Builder</h2>
      <FormBuilder
        form={{ display: "form" }}
        options={options}
        onChange={onChange}
      />
      <button onClick={onSave}>Save Form</button>
    </div>
  );
};

export default CustomFormBuilder;
