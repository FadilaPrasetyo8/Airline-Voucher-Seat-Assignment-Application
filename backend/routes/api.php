<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'status' => 'ok',
        'message' => 'API is running',
        'timestamp' => now()->toIso8601String(),
    ]);
});

Route::post('/check', [VoucherController::class, 'check']);

Route::post('/generate', [VoucherController::class, 'generate']);