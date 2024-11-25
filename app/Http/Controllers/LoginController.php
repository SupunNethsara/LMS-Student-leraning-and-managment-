<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Pail\ValueObjects\Origin\Console;

class LoginController extends Controller
{
    public function signup(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

 Account::create([
        'email' => $validatedData['email'],
        'password' => bcrypt($validatedData['password']),
        'role' => $request->input('role', 'user'), 
    ]);

    return response()->json(['message' => 'User created successfully'], 201);

     //  Account::create([
    //         'email' => $validatedData['email'],
    //         'password' => bcrypt($validatedData['password']), 
    //     ]);
        
    //     return response()->json(['message' => 'User logged in successfully']);
    }
    
    public function login(Request $request)
    {
      $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

     if (Auth::attempt(['email' => $validatedData['email'], 'password' => $validatedData['password']])) {
        $user = Auth::user();
        return response()->json([
            'message' => 'Login successful',
            'role' => $user->role, 
        ], 200);
 
    } else {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }
      // if (Auth::attempt(['email' => $validatedData['email'], 'password' => $validatedData['password']])) {
        //     // Authentication successful
        //     return response()->json(['message' => 'Login successful'], 200);
        // } 
       
        // else {
          
        //     return response()->json(['message' => 'Invalid credentials'], 401);
        // }
    }
}
