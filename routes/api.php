<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/jobs', [JobController::class, 'index']);
Route::get('/job/{id}', [JobController::class, 'show']);
Route::post('/job-add', [JobController::class, 'store']);
Route::put('/job-edit/{id}', [JobController::class, 'update']);
Route::delete('/job-delete/{id}', [JobController::class, 'destroy']);