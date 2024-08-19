<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;

class JobController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs);
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
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'type' => 'required|string|max:255',
                'location' => 'required|string|max:255',
                'description' => 'nullable|string',
                'salary' => 'nullable|string',
                'company_name' => 'required|string|max:255',
                'company_description' => 'nullable|string',
                'company_contactEmail' => 'required|string|email|max:255',
                'company_contactPhone' => 'required|string|max:255',
        ]);

        $job = Job::create($validatedData);

        return response()->json($job, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $job = Job::findOrFail($id);
        return response()->json($job);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'type' => 'sometimes|required|string|max:255',
            'location' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'salary' => 'nullable|string',
            'company_name' => 'sometimes|required|string|max:255',
            'company_description' => 'nullable|string',
            'company_contactEmail' => 'sometimes|required|string|email|max:255',
            'company_contactPhone' => 'sometimes|required|string|max:255',
        ]);

        $job = Job::findOrFail($id);
        $job->update($validatedData);

        return response()->json($job);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $job = Job::findOrFail($id);
        $job->delete();

        return response()->json(null, 204);
    }
}
