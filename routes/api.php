<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


//route api
Route::get('/shrimp','API\JalaController@index')->name('shrimp.index');
Route::get('/shrimp/search','API\JalaController@search')->name('shrimp.search');
Route::get('/shrimp/detail/{id}','API\JalaController@show')->name('shrimp.show');
Route::get('/lokasi','API\JalaController@lokasi')->name('shrimp.lokasi');
Route::get('/chart','API\JalaController@chart')->name('shrimp.chart');