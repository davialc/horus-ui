import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { Box } from './Box';

const data = [
	{
		name: 'Jan',
		entradas: 4000,
		saidas: 2400,
		amt: 2400,
	},
	{
		name: 'Feb',
		entradas: 3000,
		saidas: 1398,
		amt: 2210,
	},
	{
		name: 'Mar',
		entradas: 2000,
		saidas: 9800,
		amt: 2290,
	},
	{
		name: 'Abr',
		entradas: 2780,
		saidas: 3908,
		amt: 2000,
	},
	{
		name: 'May',
		entradas: 1890,
		saidas: 4800,
		amt: 2181,
	},
	{
		name: 'Jun',
		entradas: 2390,
		saidas: 3800,
		amt: 2500,
	},
];

export const Chart = () => {
	return (
		<Box size="sm">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" /> */}
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line
						type="monotone"
						dataKey="saidas"
						stroke="#8884d8"
						activeDot={{ r: 8 }}
					/>
					<Line type="monotone" dataKey="entradas" stroke="#82ca9d" />
				</LineChart>
			</ResponsiveContainer>
		</Box>
	);
};

export interface ChartProps {}
