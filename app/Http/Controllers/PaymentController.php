<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Illuminate\Http\Request;

class PaymentController extends Controller {
  
    public function store(Request $request) {
        $validated = $request->validate([
            'student_register_id' => 'required|exists:student_registers,id',
            'amount' => 'required|numeric',
            'status' => 'required|string',
            'month' => 'required|integer',
            'date' => 'required|date',
        ]);

        $payment = Payment::create($validated);

        return response()->json(['message' => 'Payment saved successfully!', 'payment' => $payment], 201);
    }
 
    public function getPayments($id)
    {
        
        $payments = Payment::where('student_register_id', $id)->get();
    
        if ($payments->isEmpty()) {
            return response()->json(['message' => 'No payments found'], 404);
        }
    
        return response()->json($payments, 200);
    }


    public function getAlldatapayment(){
        $PaymentAlldata = Payment::all();
        return response()->json(['paymentdetails' => $PaymentAlldata]);
        
    }
}




