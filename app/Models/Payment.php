<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model {
    use HasFactory;

    protected $fillable = [
        'student_register_id',
        'amount',
        'status',
        'month',
        'date',
    ];

    public function student() {
        return $this->hasMany(StudentRegister::class);
    }
}
