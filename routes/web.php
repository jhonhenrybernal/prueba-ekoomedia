<?php

use Illuminate\Support\Facades\Route;
use App\Models\Form;

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

Route::get('/', function () {

    return view('home',['client' => Form::all()]);
});


Route::get('/avion', function () {
    return view('avion');
})->name('avion');

Route::get('/avioneta', function () {
    return view('avioneta');
})->name('avioneta');

Route::get('/jet', function () {
    return view('jet');
})->name('jet');
