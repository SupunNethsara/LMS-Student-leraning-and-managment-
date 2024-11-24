<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        
        Account::create([
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']), // Encrypt the password
        ]);

        return response()->json(['message' => 'User logged in successfully']);
    }
}
