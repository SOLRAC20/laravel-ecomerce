import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface VerificationChartProps {
    data: Array<{
        month: string;
        value: number;
    }>;
}

const chartConfig = {
    value: {
        label: 'Verificações',
        color: '#3B82F6',
    },
};

export function VerificationChart({ data }: VerificationChartProps) {
    return (
        <Card>
            <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-2 space-y-2 sm:space-y-0 border-b py-4 sm:py-5">
                <div className="grid flex-1 gap-1 text-center sm:text-left">
                    <CardTitle className="text-base sm:text-lg">Verificações por Mês</CardTitle>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-initial px-3 py-1 text-xs bg-muted rounded-md">2024</button>
                    <button className="flex-1 sm:flex-initial px-3 py-1 text-xs text-muted-foreground rounded-md">2023</button>
                </div>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[200px] sm:h-[250px] w-full"
                >
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-value)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-value)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                        />
                        <YAxis hide />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    labelFormatter={(value) => `Mês: ${value}`}
                                    formatter={(value) => [`${value}`, 'Verificações']}
                                />
                            }
                        />
                        <Area
                            dataKey="value"
                            type="natural"
                            fill="url(#fillValue)"
                            stroke="var(--color-value)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
