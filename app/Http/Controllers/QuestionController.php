<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function index() {
        return Question::all();
    }

    public function store(Request $request) {
        $data = $request->validate([
            'question' => 'required|string',
            'options' => 'required|array',
            'correct_answer' => 'required|string',
            'order' => 'required|integer',
        ]);
        return Question::create($data);
    }

    public function show($id) {
        return Question::findOrFail($id);
    }

    public function update(Request $request, $id) {
        $question = Question::findOrFail($id);
        $question->update($request->all());
        return $question;
    }

    public function destroy($id) {
        Question::destroy($id);
        return response()->noContent();
    }
}
