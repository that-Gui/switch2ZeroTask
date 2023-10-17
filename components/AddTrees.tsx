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
// form imports
import { useForm } from 'react-hook-form';
import { UserContext } from '@/app/context/user';

export default function AddTrees() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const userData = React.useContext(UserContext);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>Add Trees</Button>
			</SheetTrigger>
			<SheetContent className='min-w-[30vw]' side={'left'}>
				<SheetHeader>
					<SheetTitle>Add Tree Purchase</SheetTitle>
					<SheetDescription>
						Add your tree purchase, click save when done.
					</SheetDescription>
				</SheetHeader>

				<div className='mt-[16px] mb-[32px]'>
					<form
						onSubmit={handleSubmit((data) => {
							const month = Number(data.month);
							const year = Number(data.year);
							const trees = Number(data.trees);
							userData?.upDatePurchases({
								month: month,
								year: year,
								treeAmount: trees,
							});
							reset();
						})}
						className='flex flex-col gap-4'
					>
						<input
							type='number'
							{...register('month', {
								required: 'this is required',
								max: {
									value: 12,
									message: 'there are only  12 months in a year',
								},
								min: { value: 1, message: 'correct format is MM' },

								maxLength: { value: 2, message: 'correct format is MM' },
							})}
							placeholder='purchase month'
						/>
						{errors.month && <p>{`${errors.month.message}`}</p>}

						<input
							type='number'
							{...register('year', {
								required: 'this is required',
								minLength: { value: 4, message: 'correct format is YYYY' },
								maxLength: { value: 4, message: 'correct format is YYYY' },
								min: {
									value: 1980,
									message: 'earliest date you can record is 1980',
								},
								max: {
									value: new Date().getFullYear(),
									message: 'you cannot add future dates',
								},
							})}
							placeholder='purchase year'
						/>
						{errors.year && <p>{`${errors.year.message}`}</p>}

						<input
							type='number'
							{...register('trees', {
								required: 'this is required',
								max: { value: 55, message: 'max trees per year is 50' },
								min: { value: 1, message: 'min trees per year is 1' },
							})}
							placeholder='number of trees purhcased'
						/>
						{errors.trees && <p>{`${errors.trees.message}`}</p>}

						<Button>
							<input type='submit' />
						</Button>
					</form>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button variant='secondary'>Save & Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
