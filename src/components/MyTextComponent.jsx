import { Components } from "formiojs";
import TextFieldComponent from "formiojs/components/textfield/TextField";

class MyTextComponent extends TextFieldComponent {
  static schema() {
    return TextFieldComponent.schema({
      type: "myTextComponent",
      label: "Text",
      key: "text",
      placeholder: "Enter your text",
      validate: {
        required: true,
      },
    });
  }

  static get builderInfo() {
    return {
      title: "Text",
      group: "custom",
      icon: "font",
      weight: 10,
      schema: MyTextComponent.schema(),
    };
  }

  build() {
    super.build();
    this.input.setAttribute("placeholder", this.component.placeholder || "");
  }
}

Components.addComponent("myTextComponent", MyTextComponent);

export default MyTextComponent;
