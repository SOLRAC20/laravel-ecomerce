import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, UserPlus, FileText, AlertTriangle } from 'lucide-react';

interface ActivityItem {
    type: string;
    title: string;
    description: string;
    time: string;
    icon: string;
}

interface RecentActivityProps {
    activities: ActivityItem[];
}

const iconMap = {
    'check-circle': CheckCircle,
    'user-plus': UserPlus,
    'file-text': FileText,
    'alert-triangle': AlertTriangle,
};

const typeColorMap = {
    verification: 'bg-green-100 text-green-800',
    user: 'bg-blue-100 text-blue-800',
    report: 'bg-purple-100 text-purple-800',
    alert: 'bg-red-100 text-red-800',
};

export function RecentActivity({ activities }: RecentActivityProps) {
    return (
        <Card className=' h-full'>
            <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {activities.map((activity, index) => {
                    const IconComponent = iconMap[activity.icon as keyof typeof iconMap];
                    const colorClass = typeColorMap[activity.type as keyof typeof typeColorMap];

                    return (
                        <div key={index} className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full ${colorClass.replace('text-', 'bg-').replace('800', '200')}`}>
                                <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium">{activity.title}</p>
                                <p className="text-xs text-muted-foreground">
                                    {activity.description}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {activity.time}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
}
