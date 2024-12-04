<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('email');
            $table->string('password');
            $table->string('role')->default('user');
            $table->string('corce');
            $table->enum('status', ['online', 'offline'])->default('offline');
            $table->unsignedBigInteger('student_register_id')->nullable();
            $table->foreign('student_register_id')->references('id')->on('student_registers')->onDelete('cascade');
            

             $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('accounts');
    }
};

