import React from "react";
import { storiesOf, action } from "@kadira/storybook";
import Greeting from "./Greeting";

storiesOf("Greeting", module)

    .add("default", () => (<Greeting />))

    .add("with message", () => (<Greeting message="Hey, champ" />))

    .add("with action", () => (<Greeting message="Hey, you" onClose={action("Close button clicked")} />))