<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\logoutController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\profileController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\TaskController;


use Illuminate\Support\Facades\Route;

Route::post('/login', [LoginController::class, 'login']);
Route::post('/signup', [LoginController::class, 'signup']);
Route::post('/Count', [LoginController::class, 'Calculatecount']);
Route::post('/register', [LoginController::class, 'Registerstudent']);
Route::post('/logout', [LoginController::class, 'logout']);
// Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:api');
Route::post('/getdataregister', [LoginController::class, 'getdataRegister']);
Route::post('/update-status', [LoginController::class, 'updateStatus']);
Route::post('/getlogin-details', [LoginController::class, 'getUserDetails']);


//Task manager
Route::post('/postTaskDetails', [TaskController::class, 'SendTaskDetails']);
Route::get('/getTaskDetails', [TaskController::class, 'getalldataTask']);


//payment
Route::post('/payment', [PaymentController::class, 'store']); // Save payment

Route::get('/payments/{id}', [PaymentController::class, 'getPayments']);

Route::post('/paymentsall', [PaymentController::class, 'getAlldatapayment']); 


//Quiz

Route::get('/questions', [QuestionController::class, 'index']);
Route::post('/questions', [QuestionController::class, 'store']);
Route::get('/questions/{id}', [QuestionController::class, 'show']);
Route::put('/questions/{id}', [QuestionController::class, 'update']);
Route::delete('/questions/{id}', [QuestionController::class, 'destroy']);





