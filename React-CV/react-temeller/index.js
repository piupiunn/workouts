//index.js dosyasındakiler browser tarafından ilk gösterilecek olanlardır. Uygulamamızın ilk sayfasıdır.
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(
  <App />,

  document.getElementById("root")
);
