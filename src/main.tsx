import React from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const container = document.getElementById("root");
container
	? createRoot(container).render(
			<React.StrictMode>
				<CssBaseline />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.StrictMode>
	  )
	: console.error("Root element not found");
