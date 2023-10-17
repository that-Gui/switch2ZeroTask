import { NextResponse } from 'next/server';

// dummy data
const countries = [
	{
		name: 'Singapore',
		avgCO2: 8605.917,
	},
	{
		name: 'United Kingdom',
		avgCO2: 5639.06,
	},
	{
		name: 'Germany',
		avgCO2: 9591.483,
	},
	{
		name: 'China',
		avgCO2: 7498.426,
	},
	{
		name: 'Australia',
		avgCO2: 17374.4,
	},
	{
		name: 'India',
		avgCO2: 1940.65,
	},
];

export async function GET() {
	return NextResponse.json(countries);
}
