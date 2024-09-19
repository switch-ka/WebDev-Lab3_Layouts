<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

    
Route::get('/', function () {
    return view('blog');
})->name('blog');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/contact', function () {
    return view('contact');
})->name('contact');

Route::get('/post1', function () {
    return view('post1');
})->name('post1');

Route::get('/post2', function () {
    return view('post2');
})->name('post2');

Route::get('/post3', function () {
    return view('post3');
})->name('post3');
