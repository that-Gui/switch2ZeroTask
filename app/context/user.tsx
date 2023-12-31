'use client';

import React from 'react';

type UserState = {
	country: { name: string | null; avgCO2: number | null };
	purchases: Array<{ month: number; year: number; treeAmount: number } | null>;
	offsetArray: Array<{ year: string; offset: number }> | null;
	totalTrees: number | null;
	upDateCountry: (country: { name: string; avgCO2: number }) => void;
	upDatePurchases: (purchase: {
		month: number;
		year: number;
		treeAmount: number;
	}) => void;
	deletePurchase: (index: number) => void;
};

export const UserContext = React.createContext<UserState | null>(null);

function offsetarr(input: UserState['purchases']) {
	const output = [];

	for (const item of input) {
		const { year, treeAmount }: any = item;
		let offsetSteps = (treeAmount * 28.5) / 6;
		let offset = 0;

		for (let i = 0; i < 10; i++) {
			if (i < 7) {
				offset = offsetSteps * i;
			} else {
				offset = offset;
			}

			output.push({
				year: String(year),
				offset: Number(offset.toFixed(2)),
			});
		}
	}

	return output;
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = React.useState<UserState>({
		country: { name: null, avgCO2: null },
		purchases: [],
		offsetArray: [],
		totalTrees: 0,
		upDateCountry: (country) => {
			setUser((prevUser) => ({
				...prevUser,
				country: country,
			}));
		},
		upDatePurchases: (purchase) => {
			setUser((prevUser) => {
				let sameDate = false;
				let updatedPurchases = [...prevUser.purchases];
				updatedPurchases = updatedPurchases.map((item) => {
					if (
						item &&
						item.month === purchase.month &&
						item.year === purchase.year
					) {
						sameDate = true;
						return {
							...item,
							treeAmount: item.treeAmount + purchase.treeAmount,
						};
					}
					return item;
				});

				if (!sameDate) {
					updatedPurchases.push(purchase);
				}

				updatedPurchases.sort((a, b) => {
					if (a.year !== b.year) {
						return a.year - b.year;
					} else {
						return a.month - b.month;
					}
				});

				return {
					...prevUser,
					purchases: updatedPurchases,
					totalTrees: updatedPurchases.reduce((total, item) => {
						if (item) {
							return total + item.treeAmount;
						}
						return total;
					}, 0),
					offsetArray: offsetarr(updatedPurchases),
				};
			});
		},
		deletePurchase: (index) => {
			setUser((prevUser) => {
				let updatedPurchases = [...prevUser.purchases];
				updatedPurchases.splice(index, 1);
				return {
					...prevUser,
					purchases: updatedPurchases,
				};
			});
		},
	});

	React.useEffect(() => {
		console.log('user changed', user);
	}, [user]);

	return (
		<UserContext.Provider value={{ ...user }}>{children}</UserContext.Provider>
	);
};
