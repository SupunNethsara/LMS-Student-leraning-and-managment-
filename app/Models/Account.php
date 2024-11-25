<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Account extends Authenticatable
{
    protected $table ='post';
    protected $fillable = ['email' , 'password'];
}
