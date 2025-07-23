import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface LevelDistributionProps {
    data: Array<{
        level: string;
        percentage: number;
        color: string;
    }>;
}

const chartConfig = {
    percentage: {
        label: 'Porcentagem',
    },
};

export function LevelDistribution({ data }: LevelDistributionProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base sm:text-lg">Distribuição por Nível PPE</CardTitle>
                <p className="text-sm text-muted-foreground">Detalhes</p>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center">
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[200px] sm:max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={
                                    <ChartTooltipContent
                                        formatter={(value) => [`${value}%`, 'Porcentagem']}
                                    />
                                }
                            />
                            <Pie
                                data={data}
                                dataKey="percentage"
                                nameKey="level"
                                innerRadius={60}
                                strokeWidth={5}
                                stroke="white"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </div>
                <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
                    {data.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="h-3 w-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-muted-foreground truncate">
                                {item.level}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
