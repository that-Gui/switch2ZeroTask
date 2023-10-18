'use client';

import * as React from 'react';

import { UserContext } from '../app/context/user';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/Card';

export default function AvgCO2() {
	const userData = React.useContext(UserContext);

	const [year, setYear] = React.useState(false);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Carbon Neutral</CardTitle>
				<CardDescription>
					this is an estimate of when you will achieve a carbon neutral offset
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className='font-black'>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</Card>
	);
}
