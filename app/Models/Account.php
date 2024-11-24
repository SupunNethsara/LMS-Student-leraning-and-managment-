<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table ='posts';
    protected $fillable = ['email' , 'password'];
}
