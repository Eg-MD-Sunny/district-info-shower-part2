import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<District name='NoyaKhali' special="Bivag"></District>
		<District name='Bramonbaria' special='Joda akbar'></District>
		<District name="Sumilla" special='Moyna and moti'></District>	
    </div>
  ); 
}

const districtStyle = {
	backgroundColor: 'lightblue',
	padding: '20px',
	margin: '20px',
	borderRadius: '20px',
}
function District(props){
	const [power, setPower] = useState(1)
	const boostPower = () =>{
		let newValue = power * 2;
		setPower(newValue)
	}
	return (
		<div style={districtStyle}>
			<h2>Name: {props.name}</h2>
			<p>Specialty: {props.special}</p>
			<p>Power: {power}</p>
			<button onClick={boostPower}>Boost The Power</button>
		</div>
	)
}

export default App;
