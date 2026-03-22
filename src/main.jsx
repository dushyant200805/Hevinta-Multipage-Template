import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

// ================= UI Framework =================
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ================= Project CSS =================
import "./includes/css/mainstyle.css";
import "./includes/css/style.css";

// ================= Libraries CSS =================
import "@splidejs/splide/css";
import "aos/dist/aos.css";

// ================= jQuery (for old plugins) =================
import $ from "jquery";
window.$ = window.jQuery = $;
import "jquery-validation";

// ================= Font Awesome (All Icons) =================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

// ================= Render App =================
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </StrictMode>
); 