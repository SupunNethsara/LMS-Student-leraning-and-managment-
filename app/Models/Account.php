<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
class Account extends Authenticatable
{
    use HasFactory;
    protected $fillable = ['email' , 'password' ,'role' ,'corce','student_register_id'];

    public function register(){
        return $this->belongsTo(StudentRegister::class);
    }
}
