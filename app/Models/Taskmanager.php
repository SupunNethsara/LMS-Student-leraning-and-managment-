<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Taskmanager extends Model
{
    protected $table ='task';
    protected $fillable = [
       'projectname',
       'projecttitle',
       'projectview',
       'description',
       'closingdate',
    ];
}
