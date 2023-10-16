'use client';

import React from 'react';

type UserState = {
	country: { name: string; avgCO2: number };
	purchases: [{ date: Date; treeAmount: number }];
	upDateCountry: (country: { name: string; avgCO2: number }) => void;
};

export const UserContext = React.createContext<UserState | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<UserState>({
		country: { name: 'Singapore', avgCO2: 8.56 },
		purchases: [{ date: new Date(), treeAmount: 11 }],
		upDateCountry: (country: { name: string; avgCO2: number }) => {
			setUser({ ...user, country: country });
		},
	});

	React.useEffect(() => {
		console.log('user changed', user);
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
