'use client';

import * as React from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';

export default function AddTrees() {
	const [purchase, setPurchase] = React.useState({
		date: new Date(),
		treeAmount: 0,
	});

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>Add Trees</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Add Tree Purchase</SheetTitle>
					<SheetDescription>
						Add your tree purchase, click save when done.
					</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='date' className='text-right'>
							Date
						</Label>

						<Input
							id='purchase date'
							type='date'
							value='11/11/2011'
							className='col-span-3'
						/>
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='quantity' className='text-right'>
							Quantity
						</Label>
						<Input id='quantity' type='number' className='col-span-3' />
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
