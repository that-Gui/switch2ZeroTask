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

export default function TreesMonthly() {
	const userData = React.useContext(UserContext);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Tree Planting</CardTitle>
				<CardDescription>
					Each tree comes with a one time planting cost fee of USD 120
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className='font-black'>
					USD {userData ? userData.totalTrees! * 120 : 0}
				</p>
			</CardContent>
			<CardFooter>
				<p>for planting {userData?.totalTrees} Trees</p>
			</CardFooter>
		</Card>
	);
}
