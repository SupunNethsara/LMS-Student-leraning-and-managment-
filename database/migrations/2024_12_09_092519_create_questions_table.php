<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->string('question');
            $table->json('options'); 
            $table->string('correct_answer'); 
            $table->integer('order'); 
            $table->timestamps();
        });
        
    }
 
    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
