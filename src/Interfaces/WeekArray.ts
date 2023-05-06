export interface IWeekArray {
	date: string,
	day: {
		avgtemp_c: number,
		condition: {
			icon: string
		}
	}
}