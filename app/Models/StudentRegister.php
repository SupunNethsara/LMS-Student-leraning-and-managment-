<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
class StudentRegister extends Authenticatable
{
    use HasFactory;
   
    protected $fillable = [
        'fname',
        'mname',
        'lname',
        'email',
        'password',
        'corce',
        'gender',
        'contact',
        'qulification',
        'role',
        'adress',
        'profile',
    ];
    public function posttable(){
        return $this->hasOne(Account::class);
    }
}
