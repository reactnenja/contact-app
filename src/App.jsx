import { useState } from "react";
import Header from "./components/header/Header";
import Table from "./components/table/Table";
import ModalsAdding from "./components/header/Toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.scss";
function App() {
	return (
		<div className='container'>
			<Header />
			<Table />
			<ModalsAdding />
		</div>
	);
}
export default App;
