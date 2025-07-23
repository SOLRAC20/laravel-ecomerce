import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface StatCardProps {
    title: string;
    value: string | number;
    description?: string;
    icon?: LucideIcon;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    className?: string;
    iconColor?: string;
}

export function StatCard({
    title,
    value,
    description,
    icon: Icon,
    trend,
    className,
    iconColor = 'text-muted-foreground'
}: StatCardProps) {
    return (
        <Card className={cn('', className)}>
            <CardContent>
                <div className="flex justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                    </CardTitle>
                    {Icon && <Icon className={cn('h-4 w-4', iconColor)} />}
                </div>
                <div className="text-2xl font-bold">{value}</div>
                {description && (
                    <p className="text-xs text-muted-foreground mt-1">
                        {description}
                    </p>
                )}
                {trend && (
                    <div className="flex items-center space-x-1 text-xs mt-2">
                        <span
                            className={
                                trend.isPositive
                                    ? 'text-green-600'
                                    : 'text-red-600'
                            }
                        >
                            {trend.isPositive ? '+' : ''}
                            {trend.value}%
                        </span>
                        <span className="text-muted-foreground">
                            from last month
                        </span>
                    </div>
                )}
                <div className="space-y-2">
                            <div className="flex flex-col">
                                <div className='flex justify-between'>
                                    <span className="text-xs sm:text-sm text-blue-700">Nível 1</span>
                                    <span className="text-xs sm:text-sm font-medium text-blue-900">42%</span>
                                </div>
                                <Progress value={33} />
                            </div>
                            <div className="flex flex-col">
                                <div className='flex justify-between'>
                                <span className="text-xs sm:text-sm text-blue-700">Nível 2</span>
                                <span className="text-xs sm:text-sm font-medium text-blue-900">30%</span>
                                </div>
                                <Progress value={33} />
                            </div>
                            <div className="flex flex-col">
                                <div className='flex justify-between'>
                                <span className="text-xs sm:text-sm text-blue-700">Nível 3</span>
                                <span className="text-xs sm:text-sm font-medium text-blue-900">28%</span>
                                </div>
                                <Progress value={33} />
                            </div>
                        </div>
            </CardContent>
        </Card>
    );
}
