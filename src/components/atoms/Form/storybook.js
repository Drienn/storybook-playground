import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Form from "./";

export const FormStories = storiesOf("Form", module)
  .add("base", () => <Form />)
  .add("withChildren", () => <Form />)
  .add("even more things@", () => <Form />);
