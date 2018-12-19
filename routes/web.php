<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::view('/', 'master');

Route::get('skills', function () {
    return ['Php', 'Laravel', 'Java', 'Javscript', 'Vue'];
});

Route::GET('project/create', 'ProjectController@create');
Route::post('project', 'ProjectController@store');

Route::get('post', 'PostController@create')->name('create');


