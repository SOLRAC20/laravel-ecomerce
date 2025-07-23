import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RapidVerification } from '@/components/rapid-verification';
import {
    ShieldCheck,
    FileText,
    Users,
    Settings,
    ArrowRight
} from 'lucide-react';

interface QuickAction {
    title: string;
    description: string;
    icon: string;
    route: string;
}

interface QuickActionsProps {
    actions: QuickAction[];
    title: string,
    description: string,
    actionn: string;
}

const iconMap = {
    'shield-check': ShieldCheck,
    'file-text': FileText,
    'users': Users,
    'settings': Settings,
};

export function QuickActions({ actions, title,
    description,
    actionn }: QuickActionsProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Atividade Recente</CardTitle>
                <p className="text-sm text-muted-foreground">Ver tudo</p>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {actions.map((action, index) => {
                    const IconComponent = iconMap[action.icon as keyof typeof iconMap];

                    return (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors cursor-pointer group"
                        >
                            <div className="p-2 sm:p-3 bg-background rounded-full mb-2 sm:mb-3 group-hover:scale-110 transition-transform">
                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <h3 className="font-medium text-xs sm:text-sm mb-1">{action.title}</h3>
                            <p className="text-xs text-muted-foreground">
                                {action.description}
                            </p>

                        </div>
                    );
                })}
                            <div className='col-span-2'>
                                <RapidVerification
                                                                title={title}
                                                                description={description}
                                                                action={actionn}
                                                            />
                            </div>
            </CardContent>
        </Card>
    );
}
