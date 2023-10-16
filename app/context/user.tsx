'use client';

import * as React from 'react';

const initialUserState = {
	country: { name: 'singapore', avgCO2: 8.56 },
	purchases: [{ date: new Date(), treeAmount: 0 }],
	updateUserCountry: (country: any) => {},
	updateUserPurchases: (purchases: any) => {},
};

export const UserContext = React.createContext(initialUserState);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState(initialUserState);

	const updateUserCountry = (country: any) => {
		setUser({ ...user, country: country });
	};

	const updateUserPurchases = (purchases: any) => {
		setUser({ ...user, purchases: purchases });
	};

	React.useEffect(() => {
		console.log('user changed', user);
	}, [user]);

	const contextValue = {
		country: user.country,
		purchases: user.purchases,
		updateUserCountry: (country: any) => updateUserCountry(country),
		updateUserPurchases: (purchases: any) => updateUserPurchases(purchases),
	};

	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	);
};
