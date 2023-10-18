'use client';

import * as React from 'react';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

import { UserContext } from '../app/context/user';

export default function CarbonGraph() {
	const userData = React.useContext(UserContext);
	let ct = userData?.country?.avgCO2 ?? 0;
	let data = userData?.offsetArray ?? [];

	const tData = data.map((element) => ({ ...element, Target: ct }));

	console.log(tData);

	return (
		<ResponsiveContainer width='100%' height={300}>
			<LineChart data={tData}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='year' fontSize={16} tickLine={false} axisLine={false} />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='Target' stroke='#82ca9d' />
				<Line
					type='monotone'
					dataKey='offset'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
