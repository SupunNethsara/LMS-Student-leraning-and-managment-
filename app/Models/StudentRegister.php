<?php

namespace App\Models;


use Illuminate\Foundation\Auth\User as Authenticatable;
class StudentRegister extends Authenticatable
{
    protected $table ='register';
    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'email',
        'password',
        'corce',
        'gender',
        'qulification',
        'profile',
    ];
}
