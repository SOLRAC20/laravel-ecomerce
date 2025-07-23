import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { StatCard } from '@/components/stat-card';
import { RecentActivity } from '@/components/recent-activity';
import { VerificationChart } from '@/components/verification-chart';
import { LevelDistribution } from '@/components/level-distribution';
import { QuickActions } from '@/components/quick-actions';
import { RapidVerification } from '@/components/rapid-verification';
import { CustomPieChart } from '@/components/pieChart';
import {
    Shield,
    Users,
    CheckCircle,
    TrendingUp,
    Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Painel Principal',
        href: '/dashboard',
    },
];

interface DashboardProps {
    ppesByLevel: {
        total: number;
        levels: Array<{
            name: string;
            count: number;
            percentage: number;
        }>;
    };
    lastAccesses: {
        total: number;
        today: number;
        thisWeek: number;
        thisMonth: number;
    };
    verificationsDone: {
        total: number;
        daily: number;
        weekly: number;
        monthly: number;
    };
    activeUsers: {
        total: number;
        administrators: number;
        analysts: number;
        consultants: number;
    };
    verificationsByMonth: Array<{
        month: string;
        value: number;
    }>;
    levelDistribution: Array<{
        level: string;
        percentage: number;
        color: string;
    }>;
    recentActivity: Array<{
        type: string;
        title: string;
        description: string;
        time: string;
        icon: string;
    }>;
    quickActions: Array<{
        title: string;
        description: string;
        icon: string;
        route: string;
    }>;
    rapidVerifications: {
        title: string;
        description: string;
        action: string;
    };
}

export default function Dashboard({
    ppesByLevel,
    lastAccesses,
    verificationsDone,
    activeUsers,
    verificationsByMonth,
    levelDistribution,
    recentActivity,
    quickActions,
    rapidVerifications

}: DashboardProps) {

    console.log(verificationsByMonth);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Painel Principal" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 p-4">
                <div>
                    <p className="text-[16px] text-black">Visão Geral do Sistema</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <span className="text-sm text-gray-600">06/05/2025</span>
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-600 text-white hover:bg-orange-700 border-orange-600 w-full sm:w-auto"
                    >
                        <Calendar className="h-4 w-4 mr-2" />
                        Exportar dados
                    </Button>
                </div>
            </div>

            <div className="space-y-6 p-4">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatCard
                        title="PPEs por Nível"
                        value={ppesByLevel?.total.toLocaleString()}
                        description="Nível 1"
                        icon={Shield}
                        iconColor="text-blue-600"
                        className=""
                    />
                    <StatCard
                        title="Últimos Acessos"
                        value={lastAccesses?.total}
                        description="Hoje"
                        icon={TrendingUp}
                        iconColor="text-green-600"
                        className=""
                    />
                    <StatCard
                        title="Verificações Realizadas"
                        value={verificationsDone?.total.toLocaleString()}
                        description="Diário"
                        icon={CheckCircle}
                        iconColor="text-orange-600"
                        className=""
                    />
                    <StatCard
                        title="Utilizadores Ativos"
                        value={activeUsers?.total}
                        description="Administradores"
                        icon={Users}
                        iconColor="text-purple-600"
                        className=""
                    />
                </div>

                {/* Detailed Stats
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
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
                    </div>

                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-green-700">Ontem</span>
                                <span className="text-xs sm:text-sm font-medium text-green-900">82</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-green-700">Esta semana</span>
                                <span className="text-xs sm:text-sm font-medium text-green-900">98</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-orange-700">Semanal</span>
                                <span className="text-xs sm:text-sm font-medium text-orange-900">-1866</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-orange-700">Nível 3</span>
                                <span className="text-xs sm:text-sm font-medium text-orange-900">-1366</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-purple-700">Analistas</span>
                                <span className="text-xs sm:text-sm font-medium text-purple-900">26</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs sm:text-sm text-purple-700">Consultores</span>
                                <span className="text-xs sm:text-sm font-medium text-purple-900">8</span>
                            </div>
                        </div>
                    </div>
                </div>
                */}

                {/* Charts and Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <VerificationChart data={verificationsByMonth} />
                    <CustomPieChart
                        data={[
                            { name: 'Search Engine', value: 1048, color: '#3B82F6' },
                            { name: 'Direct', value: 735, color: '#10B981' },
                            { name: 'Email', value: 580, color: '#F59E0B' },
                            { name: 'Union Ads', value: 484, color: '#EF4444' },
                            { name: 'Video Ads', value: 300, color: '#8B5CF6' }
                        ]}
                       title="Distribuição de PPEs"
                        subtitle="Por tipo de equipamento"
                        height={350}
                        showLegend={true}
                    />

                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="lg:col-span-1 h-full">
                        <RecentActivity activities={recentActivity} />
                    </div>
                    <div className="lg:col-span-1">
                        <QuickActions actions={quickActions} title={rapidVerifications?.title}
                                description={rapidVerifications?.description}
                                actionn={rapidVerifications?.action} />


                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
