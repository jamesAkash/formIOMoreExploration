import { Components } from "formiojs";
import TextFieldComponent from "formiojs/components/textfield/TextField";

class MyEmailComponent extends TextFieldComponent {
  static schema() {
    return TextFieldComponent.schema({
      type: "myEmailComponent",
      label: "Email",
      key: "email",
      placeholder: "Enter your email",
      inputType: "email",
      validate: {
        required: true,
        pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        customMessage: "Please enter a valid email address",
      },
    });
  }

  static get builderInfo() {
    return {
      title: "Email",
      group: "custom",
      icon: "envelope",
      weight: 10,
      schema: MyEmailComponent.schema(),
    };
  }

  build() {
    super.build();
    this.input.setAttribute("type", "email");
    this.input.setAttribute("placeholder", this.component.placeholder || "");
  }
}

Components.addComponent("myEmailComponent", MyEmailComponent);

export default MyEmailComponent;
