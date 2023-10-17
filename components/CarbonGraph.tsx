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

	const data = [
		{ year: '2020', Target: ct, Offset: 0 },
		{ year: '2020', Target: ct, Offset: 24 },
		{ year: '2020', Target: ct, Offset: 48 },
		{ year: '2020', Target: ct, Offset: 72 },
		{ year: '2021', Target: ct, Offset: 96 },
		{ year: '2021', Target: ct, Offset: 120 },
		{ year: '2021', Target: ct, Offset: 144 },
		{ year: '2021', Target: ct, Offset: 168 },
		{ year: '2022', Target: ct, Offset: 192 },
		{ year: '2022', Target: ct, Offset: 216 },
		{ year: '2022', Target: ct, Offset: 240 },
		{ year: '2022', Target: ct, Offset: 264 },
		{ year: '2023', Target: ct, Offset: 288 },
	];

	return (
		<ResponsiveContainer width='100%' height={300}>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='year' fontSize={16} tickLine={false} axisLine={false} />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='Target' stroke='#82ca9d' />
				<Line
					type='monotone'
					dataKey='Offset'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
