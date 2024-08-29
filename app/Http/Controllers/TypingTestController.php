<?php

namespace App\Http\Controllers;

use App\Models\TypingTest;
use Illuminate\Http\Request;

class TypingTestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate([
            'wpm' => 'required',
            'accuracy' => 'required',
            'error' => 'required',
            'typed' => 'required',
            'time' => 'required',
        ]);

        $request->user()->tests()->create($validated);

        return redirect('/dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(TypingTest $typingTest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TypingTest $typingTest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TypingTest $typingTest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TypingTest $typingTest)
    {
        //
    }
}
