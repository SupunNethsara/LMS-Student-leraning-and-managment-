<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


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

    
    }
    public function Registerstudent(Request $request)
    {
        $validatedData = $request->validate([
            'fname' => 'required|',
            'mname' => 'nullable',
            'lname' => 'required',
            'email' => 'required|email',
            'password' => 'required|',
            'corce' => 'nullable|',
            'gender' => 'required|',
            'qulification' => 'nullable|',
            'profile' => 'nullable|file|image|max:2048',
        ]);
        $profilePath = null;
        if ($request->hasFile('profile')) {
            $profilePath = $request->file('profile')->store('profiles', 'public');
        }
        StudentRegister::create([
            'fname' => $validatedData['fname'],
            'mname' => $validatedData['mname'],
            'lname' => $validatedData['lname'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'corce' => $validatedData['corce'],
            'gender' => $validatedData['gender'],
            'qulification' => $validatedData['qulification'],
            'profile' => $profilePath,
        ]);


        return response()->json(['message' => 'User created successfully'], 201);

    
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
       
    }
 
    public function Calculatecount()
    {
        $users = Account::count();
        return response()->json(['count'=> $users]);

    }
}
