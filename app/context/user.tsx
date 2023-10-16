'use client';

import React from 'react';

type UserState = {
	country: { name: string | null; avgCO2: number | null };
	purchases: [{ date: Date; treeAmount: number } | null];
	upDateCountry: (country: { name: string; avgCO2: number }) => void;
};

export const UserContext = React.createContext<UserState | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<UserState>({
		country: { name: null, avgCO2: null },
		purchases: [null],
		upDateCountry: (country: { name: string; avgCO2: number }) => {
			setUser({ ...user, country: country });
		},
	});

	React.useEffect(() => {
		console.log('user changed', user);
	}, [user]);

	return (
		<UserContext.Provider value={{ ...user }}>{children}</UserContext.Provider>
	);
};
