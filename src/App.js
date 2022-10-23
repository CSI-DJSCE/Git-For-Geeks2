import { Home, Profile,ErrorPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
	return (
		<>
		<Router>
			<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
		</Router>
		</>
	);
}

export default App;
