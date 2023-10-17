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
				<CardTitle>Tree Maintenance</CardTitle>
				<CardDescription>
					This is an estimate of the monthly cost to maintain your trees
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className='font-black'>
					USD {userData ? userData.totalTrees! * 12 : 0}
				</p>
			</CardContent>
			<CardFooter>
				<p>cost per Year</p>
			</CardFooter>
		</Card>
	);
}
