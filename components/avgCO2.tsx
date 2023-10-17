'use client';

import * as React from 'react';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card';
import { UserContext } from '../app/context/user';

export default function AvgCO2() {
	const userData = React.useContext(UserContext);

	return (
		<>
			{userData?.country.avgCO2 && (
				<div className='p-4'>
					<p className=''>Av CO2 produced</p>
					<p className='font-black'>{userData?.country.avgCO2} KG</p>
					<span>per year</span>
				</div>
			)}
		</>
	);
}
