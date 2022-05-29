import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

// common components
// import { Header } from "./components/Header/Header";
import TopHeader from "./components/Header/TopHeader";
import ScrollToTop from "./ScrollToTop";

// components
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Materials } from "./pages/Materials/Materials";
import { Parking } from "./pages/Parking/Parking";
import { FormContextProvide } from "./pages/Home/Home";
import { OfficeContact } from "./pages/officeContact/OfficeContact";
import NewTopHeader from "./components/Header/NewTopHeader";
import { AirPressure } from "./pages/airpressure/AirPressure";
import {EPC} from './pages/EPC/EPC';
import {Sap} from './pages/Sap/Sap'

function App() {
	const [showHeader, setShowHeader] = useState(true);
	const [headercolor, setHeaderColor] = useState("transparent");
	const [headerLogo, setHeaderLogo] = useState("transparent");
	const [headerContext, setHeaderContext] = useState({
		id: "",
		name: "",
		slideNo: "",
	});
	return (
		<Router>
			{showHeader && (
				<NewTopHeader
					headercolor={headercolor}
					headerContext={headerContext}
					setHeaderContext={setHeaderContext}
				/>
			)}
			<ScrollToTop />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<Home
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
				<Route
					exact
					path="/quote"
					render={() => (
						<FormContextProvide>
							<Contact
								setShowHeader={setShowHeader}
								setHeaderColor={setHeaderColor}
								headercolor={headercolor}
								setHeaderContext={setHeaderContext}
								headerContext={headerContext}
							/>
						</FormContextProvide>
					)}
				/>
				<Route
					exact
					path="/materials"
					render={() => (
						<Materials
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
				<Route
					exact
					path="/SoundTest"
					render={() => (
						<Parking
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
					<Route
					exact
					path="/AirPressure"
					render={() => (
						<AirPressure
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
				<Route
					exact
					path="/EPC"
					render={() => (
						<EPC
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
				<Route
					exact
					path="/Sap"
					render={() => (
						<Sap
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
				<Route
					exact
					path="/officeContact"
					render={() => (
						<OfficeContact
							setShowHeader={setShowHeader}
							setHeaderColor={setHeaderColor}
						/>
					)}
				/>
			</Switch>
		</Router>
	);
}

export default App;
