import {useState} from "react";
import "./App.css";
import Diagram from "./components/Diagram";

const App = () => {
	//Скорее всего, в реальных данных будет массив объектов, поэтому создаем его:
	let [data] = useState([{value: 43}, {value: 200}, {value: 80}, {value: 315}, {value: 22}, {value: 100}]);

	return <Diagram data={data} />;
};

export default App;
