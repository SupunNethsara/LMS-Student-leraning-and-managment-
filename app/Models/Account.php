<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table ='post';
    protected $fillable = ['email' , 'password'];
}
