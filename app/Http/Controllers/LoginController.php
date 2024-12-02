<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\StudentRegister;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Request as HttpFoundationRequest;

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

    //All student data Registering
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
            'contact' => 'nullable|',
            'qulification' => 'nullable|',
            'role' => 'nullable|',
            'adress' => 'nullable|',
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
            'contact' => $validatedData['contact'],
            'qulification' => $validatedData['qulification'],
            'role' => $validatedData['role'],
            'adress' => $validatedData['adress'],
            'profile' => $profilePath,
        ]);


        return response()->json(['message' => 'User created successfully'], 201);
    }


    //Register and post table data together
    public function getUserDetails(Request $request)
    {
        $email = $request->email;

        $registerData = DB::table('register')->where('email', $email)->first();
        $postData = DB::table('post')->where('email', $email)->first();

        if ($registerData && $postData) {
            return response()->json([
                'register' => $registerData,
                'post' => $postData
            ]);
        }
        return response()->json(['message' => 'User not found'], 404);
    }

    //getdata Register for Admin panel Table
    public function getdataRegister(Request $request)
    {
        $registerdata = StudentRegister::all();
        return response()->json(['userdetails' => $registerdata]);
    }

    //Getlogin data
    public function Getlogin(Request $request)
    {
        $getLoginDetails = Account::all();
        return response()->json(['logindetails' => $getLoginDetails]);
    }

    //Login Authentication and compare with Register table email
    // public function login(Request $request)
    // {
    //     $validatedData = $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     if (Auth::attempt(['email' => $validatedData['email'], 'password' => $validatedData['password']])) {
         
    //         $user = Auth::user();
    //         $userProfile = StudentRegister::where('email', $user->email)->first();


    //         return response()->json([
    //             'message' => 'Login successful',
    //             'role' => $user->role,
    //             'profile' => $userProfile,
    //         ], 200);
    //     } else {
    //         return response()->json(['message' => 'Invalid credentials'], 401);
    //     }
    // }
    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        if (Auth::attempt(['email' => $validatedData['email'], 'password' => $validatedData['password']])) {
            $email = $request->email;
            $user = Auth::user();
            // Update status to 'online' when logged in
            DB::table('post')->where('email', $email)->update(['status' => 'online']);
    
            // Get user profile
            $userProfile = StudentRegister::where('email', $user->email)->first();
    
            return response()->json([
                'message' => 'Login successful',
                'role' => $user->role,
                'profile' => $userProfile,
            ], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'],401);
        }
    }

    

//logout when Admin and use Dashboard
    public function logout(Request $request)
    {
         Auth::logout();
        return response()->json(['message' => 'Logged out successfully.'], 200);
    }


    
//Count users
    public function Calculatecount()
    {
        $users = Account::count();
        return response()->json(['count' => $users]);
    }
}
