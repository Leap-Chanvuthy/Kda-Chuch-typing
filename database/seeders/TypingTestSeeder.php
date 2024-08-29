<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\TypingTest;

class TypingTestSeeder extends Seeder
{
    public function run()
    {
        $users = User::all();

        foreach ($users as $user) {
            $wpm = rand(50, 100);
            $accuracy = rand(80, 100);
            $error = rand(0, 10);
            $typed = rand(50, 200);

            $time_values = [15, 30, 60];
            $time_key = array_rand($time_values);
            $time = $time_values[$time_key];

            TypingTest::create([
                'user_id' => $user->id,
                'wpm' => $wpm,
                'accuracy' => $accuracy,
                'error' => $error,
                'typed' => $typed,
                'time' => $time,
            ]);
        }
    }
}
