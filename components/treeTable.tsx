'use client';

import React from 'react';
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button } from './ui/Button';
import { UserContext } from '@/app/context/user';

export default function TreeTable() {
	const userData = React.useContext(UserContext);
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>#</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Number of Trees</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{userData?.purchases.map((purchase, index) => (
					<TableRow key={index}>
						<TableCell className='font-medium'>{index + 1}</TableCell>
						<TableCell>
							{purchase?.month}/{purchase?.year}
						</TableCell>
						<TableCell>{purchase?.treeAmount}</TableCell>
						<TableCell>
							<Button onClick={() => userData.deletePurchase(index)}>
								Remove
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
