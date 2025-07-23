import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Cell, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';
import { useState } from 'react';

interface PieChartData {
    name: string;
    value: number;
    color?: string;
}

interface CustomPieChartProps {
    data?: PieChartData[];
    title?: string;
    subtitle?: string;
    showLegend?: boolean;
    innerRadius?: number;
    outerRadius?: number;
    height?: number;
}

const defaultData: PieChartData[] = [
    { name: 'Search Engine', value: 1048, color: '#3B82F6' },
    { name: 'Direct', value: 735, color: '#10B981' },
    { name: 'Email', value: 580, color: '#F59E0B' },
    { name: 'Union Ads', value: 484, color: '#EF4444' },
    { name: 'Video Ads', value: 300, color: '#8B5CF6' }
];

const defaultColors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4', '#F97316'];

const chartConfig = {
    value: {
        label: 'Valor',
    },
};

export function CustomPieChart({
    data = defaultData,
    title = 'Access From',
    subtitle,
    showLegend = true,
    innerRadius = 60,
    outerRadius = 120,
    height = 300
}: CustomPieChartProps) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // Adiciona cores padrão se não fornecidas
    const processedData = data.map((item, index) => ({
        ...item,
        color: item.color || defaultColors[index % defaultColors.length]
    }));

    const total = processedData.reduce((sum, item) => sum + item.value, 0);

    const onPieEnter = (index: number) => {
        setActiveIndex(index);
    };

    const onPieLeave = () => {
        setActiveIndex(null);
    };

    const renderCustomLabel = (entry: any) => {
        if (activeIndex === null) return null;

        return (
            <text
                x={entry.cx}
                y={entry.cy}
                textAnchor="middle"
                dominantBaseline="central"
                className="text-2xl font-bold fill-foreground"
            >
                {entry.value}
            </text>
        );
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {subtitle && (
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                )}
            </CardHeader>
            <CardContent className='grid grid-cols-1 md:lg:grid-cols-2 gap-4'>
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square"
                    style={{ height: `${height}px` }}
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    formatter={(value, name) => [
                                        `${value} (${((Number(value) / total) * 100).toFixed(1)}%)`,
                                        name
                                    ]}
                                />
                            }
                        />
                        <Pie
                            data={processedData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={activeIndex !== null ? renderCustomLabel : false}
                            outerRadius={outerRadius}
                            innerRadius={innerRadius}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={(_, index) => onPieEnter(index)}
                            onMouseLeave={onPieLeave}
                            stroke="white"
                            strokeWidth={3}
                            paddingAngle={1}
                            cornerRadius={10}
                        >
                            {processedData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    style={{
                                        filter: activeIndex === index ? 'brightness(1.1)' : 'none',
                                        transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                                        transformOrigin: 'center',
                                        transition: 'all 0.2s ease-in-out'
                                    }}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>

                {/* Estatísticas adicionais */}
                <div className="flex flex-col justify-center gap-3">
                    {processedData.slice(0, 6).map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="h-4 w-6"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-xs font-medium truncate">
                                    {item.name}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="text-lg font-bold">{item.value}</div>
                                <div className="text-xs text-muted-foreground">
                                    {((item.value / total) * 100).toFixed(1)}%
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </CardContent>
        </Card>
    );
}
