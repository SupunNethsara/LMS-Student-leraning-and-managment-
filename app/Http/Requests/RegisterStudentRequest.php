<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterStudentRequest extends FormRequest
{
   
    public function authorize(): bool
    {
        return true;
    }

  
    public function rules(): array
    {
        return [
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
            'profile' => 'nullable|url' 
        ];
    }
}
