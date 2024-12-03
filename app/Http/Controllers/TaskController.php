<?php

namespace App\Http\Controllers;

use App\Models\Taskmanager;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    function SendTaskDetails(Request $request)
    {
        $validatedData = $request->validate([
            'projectname' => 'required',
            'projecttitle' => 'required',
            'projectview' => 'required',
            'description' => 'required',
        ]);

        Taskmanager::create([
            'projectname' => $validatedData['projectname'],
            'projecttitle' => $validatedData['projecttitle'],
            'projectview' => $validatedData['projectview'],
            'description' => $validatedData['description'],
        ]);

        return response()->json(['message' => 'User created successfully'], 201);
    }


    function getalldataTask(Request $request)
    {
        $getalltask = Taskmanager::all();
        return response()->json(['taskdetails' =>  $getalltask]);
    }
}
