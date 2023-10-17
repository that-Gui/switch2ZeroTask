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

interface ComboboxProps {
	serverCountries: Array<{ name: string; avgCO2: number }>;
}

export function Combobox({ serverCountries }: ComboboxProps) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	const userData = React.useContext(UserContext);

	React.useEffect(() => {
		const countryObject =
			serverCountries.find((country) => country.name === value) || null;
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
						? serverCountries.find((country) => country.name === value)?.name
						: 'Select Country...'}
					<ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[200px] p-0'>
				<Command>
					<CommandInput placeholder='Search Country...' />
					<CommandEmpty>Country not found.</CommandEmpty>
					<CommandGroup>
						{serverCountries.map((country, index) => (
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
