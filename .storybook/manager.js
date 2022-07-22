import { addons } from "@storybook/addons";
import favicon from "./favicon.ico";
import CzTheme from "./theme";

addons.setConfig({
  theme: CzTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);
