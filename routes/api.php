<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\logoutController;
use App\Http\Controllers\profileController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/signup', [LoginController::class, 'signup']);
Route::post('/Count', [LoginController::class, 'Calculatecount']);
Route::post('/register', [LoginController::class, 'Registerstudent']);
Route::post('/logout', [LoginController::class, 'logout']);
Route::post('/getdataregister', [LoginController::class, 'getdataRegister']);








