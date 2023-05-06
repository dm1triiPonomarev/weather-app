import React, { useRef, useState } from 'react';
import './App.scss';
import Header from './components/Header'
import MainGrid from './components/MainGrid';
import { IWeekArray } from './Interfaces/WeekArray';



function App() {

	const [cityName, setCityName] = useState('')
	const [cityTitle, setCityTitle] = useState()
	const [currentTemp, setCurrentTemp] = useState<number>(0)
	const currentWeatherIcon = useRef('')
	const [weekArray, setWeekArray] = useState<IWeekArray[]>()
	const apiKey = 'ffd236240e37460bbc0144041232903'
	const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`
	const sevenDayQuary = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=7`

	async function handleInput(cityName: string): Promise<void> {
		if (cityName.length >= 2) {
			setCityName(cityName)
			const response = await fetch(query).then(res => res.json())
			const futureResponse = await fetch(sevenDayQuary).then(res => res.json())

			currentWeatherIcon.current = response.current.condition.icon
			setCityTitle(response.location.name)
			setCurrentTemp(response.current.temp_c)
			setWeekArray(futureResponse.forecast.forecastday)
		}

	}







	return (
		<>
			<div className="App" >
				<Header handleInput={handleInput} />
			</div>

			<div className="App">
				{cityTitle &&
					<>
						<div className="weather">
							<MainGrid currentTemp={currentTemp} src={currentWeatherIcon.current} weekArrray={weekArray} cityTitle={cityTitle} />
						</div>
					</>
				}
			</div>


		</>
	);
}

export default App;
