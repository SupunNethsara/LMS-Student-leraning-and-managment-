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
            'closingdate' => 'required',
        ]);

        Taskmanager::create([
            'projectname' => $validatedData['projectname'],
            'projecttitle' => $validatedData['projecttitle'],
            'projectview' => $validatedData['projectview'],
            'description' => $validatedData['description'],
            'closingdate' => $validatedData['closingdate'],
        ]);

        return response()->json(['message' => 'User created successfully'], 201);
    }


    public function getalldataTask()
    {
        $tasks = Taskmanager::all();
        return response()->json([
            'success' => true,
            'data' => $tasks
        ]);
    }
}
