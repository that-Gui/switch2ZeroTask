import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import AddTrees from './AddTrees';
import TreeTable from './treeTable';
import CarbonGraph from './CarbonGraph';

export default function DataSection() {
	return (
		<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
			<div className='lg:col-span-2'>
				<Card>
					<CardHeader>
						<CardTitle>Purchases</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-8'>
						<AddTrees />
						<TreeTable />
					</CardContent>
				</Card>
			</div>
			<div className='lg:col-span-2'>
				<Card>
					<CardHeader>
						<CardTitle>Carbon Offset </CardTitle>
					</CardHeader>
					<CardContent>
						<CarbonGraph />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
