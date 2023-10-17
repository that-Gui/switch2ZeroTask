'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';
//userContext import
import { UserContext } from '@/app/context/user';

//mock api data for countries CO2 avg emmisions
const countries = [
	{
		name: 'Singapore',
		avgCO2: 8605.917,
	},
	{
		name: 'United Kingdom',
		avgCO2: 5639.06,
	},
	{
		name: 'Germany',
		avgCO2: 9591.483,
	},
	{
		name: 'China',
		avgCO2: 7498.426,
	},
	{
		name: 'Australia',
		avgCO2: 17374.4,
	},
	{
		name: 'India',
		avgCO2: 1940.65,
	},
];

export function Combobox() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const userData = React.useContext(UserContext);

	React.useEffect(() => {
		const countryObject =
			countries.find((country) => country.name === value) || null;
		if (countryObject) {
			userData?.upDateCountry(countryObject);
		}
	}, [value]);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					role='combobox'
					aria-expanded={open}
					className='w-[200px] justify-between'
				>
					{value
						? countries.find((country) => country.name === value)?.name
						: 'Select Country...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Search Country...' />
					<CommandEmpty>Country not found.</CommandEmpty>
					<CommandGroup>
						{countries.map((country, index) => (
							<CommandItem
								key={index}
								onSelect={(countryName) => {
									setValue(
										countryName
											.split(' ')
											.map(
												(word) => word.charAt(0).toUpperCase() + word.slice(1)
											)
											.join(' ')
									);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === country.name ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{country.name}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
