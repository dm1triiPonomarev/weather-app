import { Grid } from '@mui/material';
import React from 'react';
import { IWeekArray } from '../Interfaces/WeekArray';


type MainGridProps = {
	src: string,
	weekArrray?: IWeekArray[],
	currentTemp: number,
	cityTitle: string

}

const MainGrid = ({ src, weekArrray, currentTemp, cityTitle }: MainGridProps) => {
	return (
		<Grid justifyContent="center"
			alignItems="center"
			borderTop={'3px solid lightblue'}

			container>
			<div className="" style={{ backdropFilter: 'blur(15px)', paddingBottom: '6vh', height: '15vh', paddingTop: "2vh", fontSize: '7vh', paddingRight: '30px', margin: '0 auto' }}>
				<h1 >{cityTitle}
					<br /></h1>
			</div>
			<Grid style={{ backdropFilter: 'blur(15px)', }} paddingBottom={'6vh'} paddingTop={'2vh'} borderLeft={'1px solid lightblue'} textAlign={'center'} item xs>
				<h3>(right now)</h3>
				<br />
				<img src={src} alt='icon' />
				<br />
				<br />
				<h2>{Math.round(currentTemp)}°С</h2>

			</Grid>
			{weekArrray?.map(day => {
				return (
					<Grid style={{ backdropFilter: 'blur(15px)', width: '100%', }} margin={'0 auto'} paddingBottom={'6vh'} paddingTop={'2vh'} borderLeft={'1px solid lightblue'} textAlign={'center'} xs item spacing={12} direction={'row'}>

						<h3>{day.date.split('-').reverse().slice(0, 2).join('/')}</h3>
						<br />
						<img src={day.day.condition.icon} alt="icon" />
						<br />
						<br />
						<h2>{Math.round(day.day.avgtemp_c)}°C</h2>

					</Grid>
				)
			})}

		</Grid>
	);
};

export default MainGrid;