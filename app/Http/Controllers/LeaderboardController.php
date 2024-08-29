<?php

namespace App\Http\Controllers;

use App\Models\TypingTest;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LeaderboardController extends Controller
{

    public function index($time)
    {
        $query = TypingTest::with('user')
            ->select('user_id', DB::raw('MAX(accuracy) as max_accuracy'), DB::raw('MAX(wpm) as max_wpm'))
            ->groupBy('user_id');

        if ($time == 15 || $time == 30 || $time == 60) {
            $query->where('time', $time)->where('accuracy', '>', 90);
        }

        $typingTests = $query->orderBy('max_wpm', 'desc')
            ->orderBy('max_accuracy', 'desc')
            ->take(10)
            ->get();


        $leaderboardData = $typingTests->map(function ($test) {
            return [
                'id' => $test->user_id,
                'username' => $test->user->name,
                'wpm' => $test->max_wpm,
                'accuracy' => $test->max_accuracy,
                'created_at' => $test->created_at,
            ];
        })->toArray();

        return Inertia::render('Leaderboard/Index', [
            'leaderboardData' => $leaderboardData,
            'time' => $time,
        ]);
    }
}
