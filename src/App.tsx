import { Navbar, DataProvider } from "./components";
import { ThemeProvider } from "@emotion/react";
import { DarkTheme } from "./themes";
import { Box } from "@mui/material";
import "../styles/tailwind.css";
import { HomePage } from "./pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
	const pages: string[] = ["Attestations"];

	return (
		<DataProvider>
			<ThemeProvider theme={DarkTheme}>
				<Navbar pages={pages} />
				<Box id="site-content" className={"bg-stars h-screen m-0"}>
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</Box>
			</ThemeProvider>
		</DataProvider>
	);
};

export default App;
