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

export default function TreeTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[100px]'>#</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Number of Trees</TableHead>
					<TableHead> </TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className='font-medium'>1</TableCell>
					<TableCell>11/11/2011</TableCell>
					<TableCell>10</TableCell>
					<TableCell>
						<Button>Remove</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
