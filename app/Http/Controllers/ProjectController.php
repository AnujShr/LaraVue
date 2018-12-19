<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProjectController extends Controller
{
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    /**
     * @throws ValidationException
     */
    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'description' => 'required',
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description' => request('name')
        ]);

        return ['message' => 'Project Created'];
    }
}
