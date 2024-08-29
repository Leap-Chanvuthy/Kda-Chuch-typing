<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Review;
use App\Models\TypingTest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;

class InfoController extends Controller
{
    public function index()
    {
        $users_count = User::all();
        $tests_count = TypingTest::all();
        $reviews_count = Review::all();
        $total_time = $this->getTotalTime();
        $total_typed = $this->getTotalTyped();
        $average_accuracy = DB::table('typing_tests')->avg('accuracy');
        $average_wpm = DB::table('typing_tests')->avg('wpm');
        $average_error = DB::table('typing_tests')->avg('error');

        return Inertia::render('Info/Index', [
            'users_count' => $users_count->count(),
            'tests_count' => $tests_count->count(),
            'reviews_count' => $reviews_count->count(),
            'total_time' => $total_time,
            'total_typed' => $total_typed,
            'average_accuracy' => $average_accuracy,
            'average_wpm' => $average_wpm,
            'average_error' => $average_error,
        ]);
    }

    public function getTotalTime()
    {
        return DB::table('typing_tests')
            ->select(DB::raw('SUM(time)'))
            ->value('SUM(time)');
    }

    public function getTotalTyped()
    {
        return DB::table('typing_tests')
            ->select(DB::raw('SUM(typed)'))
            ->value('SUM(typed)');
    }
}
