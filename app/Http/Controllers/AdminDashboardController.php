<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminDashboardController extends Controller
{
    public function index(): Response
    {
        // Simulando dados para a dashboard
        $dashboardData = [
            'ppesByLevel' => [
                'total' => 2487,
                'levels' => [
                    ['name' => 'Nível 1', 'count' => 1029, 'percentage' => 42],
                    ['name' => 'Nível 2', 'count' => 739, 'percentage' => 30],
                    ['name' => 'Nível 3', 'count' => 719, 'percentage' => 28],
                ]
            ],
            'lastAccesses' => [
                'total' => 186,
                'today' => 62,
                'thisWeek' => 98,
                'thisMonth' => 186
            ],
            'verificationsDone' => [
                'total' => 8942,
                'daily' => 1864,
                'weekly' => 2180,
                'monthly' => 8942
            ],
            'activeUsers' => [
                'total' => 42,
                'administrators' => 8,
                'analysts' => 26,
                'consultants' => 8
            ],
            'verificationsByMonth' => [
                ['month' => 'Jan', 'value' => 200],
                ['month' => 'Fev', 'value' => 300],
                ['month' => 'Mar', 'value' => 450],
                ['month' => 'Abr', 'value' => 600],
                ['month' => 'Mai', 'value' => 700],
                ['month' => 'Jun', 'value' => 850],
                ['month' => 'Jul', 'value' => 950],
                ['month' => 'Ago', 'value' => 1100],
                ['month' => 'Set', 'value' => 1200],
                ['month' => 'Out', 'value' => 1350],
                ['month' => 'Nov', 'value' => 1400],
                ['month' => 'Dez', 'value' => 1420]
            ],
            'levelDistribution' => [
                ['level' => 'Nível 1', 'percentage' => 42, 'color' => '#3B82F6'],
                ['level' => 'Nível 2', 'percentage' => 30, 'color' => '#F59E0B'],
                ['level' => 'Nível 3', 'percentage' => 20, 'color' => '#10B981'],
                ['level' => 'Não Classificados', 'percentage' => 8, 'color' => '#EF4444']
            ],
            'recentActivity' => [
                [
                    'type' => 'verification',
                    'title' => 'Verificação PPE realizada',
                    'description' => 'PPE 12.8469.789 - Antônio Ferreira',
                    'time' => '2 horas atrás',
                    'icon' => 'check-circle'
                ],
                [
                    'type' => 'user',
                    'title' => 'Novo usuário adicionado',
                    'description' => 'Maria Silva - Analista',
                    'time' => '3 horas atrás',
                    'icon' => 'user-plus'
                ],
                [
                    'type' => 'report',
                    'title' => 'Relatório exportado',
                    'description' => 'Relatório mensal de verificações',
                    'time' => '5 horas atrás',
                    'icon' => 'file-text'
                ],
                [
                    'type' => 'alert',
                    'title' => 'Alerta de segurança',
                    'description' => 'Múltiplas tentativas de acesso bloqueadas',
                    'time' => '1 dia atrás',
                    'icon' => 'alert-triangle'
                ]
            ],
            'quickActions' => [
                [
                    'title' => 'Verificar PPE',
                    'description' => 'Inicie a verificação de um PPE',
                    'icon' => 'shield-check',
                    'route' => 'verify-ppe'
                ],
                [
                    'title' => 'Relatórios',
                    'description' => 'Gere relatórios detalhados',
                    'icon' => 'file-text',
                    'route' => 'reports'
                ],
                [
                    'title' => 'Utilizadores',
                    'description' => 'Gerir utilizadores do sistema',
                    'icon' => 'users',
                    'route' => 'users'
                ],
                [
                    'title' => 'Configurações',
                    'description' => 'Configurar sistema',
                    'icon' => 'settings',
                    'route' => 'settings'
                ]
            ],
            'rapidVerifications' => [
                'title' => 'Verificações Rápidas',
                'description' => 'Inicie a NR que vai verificar o status de PPE de uma pessoa rapidamente.',
                'action' => 'Verificar'
            ]
        ];

        return Inertia::render('admin/dashboard', $dashboardData);
    }
}
