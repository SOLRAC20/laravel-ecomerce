<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminDashboardController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
