import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card';
import { Combobox } from './ui/Combobox';
import AvgCO2 from './avgCO2';
import COneutral from './COneutral';
import TreesMonthly from './TreesMonhtly';
import TreePlanting from './TreePlanting';

export default function Summary() {
	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<Card>
				<CardHeader>
					<CardTitle>Where do you live?</CardTitle>
				</CardHeader>
				<CardContent>
					<Combobox />
					<AvgCO2 />
				</CardContent>
			</Card>

			<COneutral />

			<TreesMonthly />

			<TreePlanting />
		</div>
	);
}
