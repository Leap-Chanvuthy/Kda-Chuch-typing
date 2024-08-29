<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;

class ProfileController extends Controller
{

    public function index(User $user)
    {
        $stats = $user->tests()->get();
        $total_test = DB::table('typing_tests')->where('user_id', '=', $user->id)->count('id');
        $average_wpm = DB::table('typing_tests')->where('user_id', '=', $user->id)->avg('wpm');
        $average_accuracy = DB::table('typing_tests')->where('user_id', '=', $user->id)->avg('accuracy');
        $average_error = DB::table('typing_tests')->where('user_id', '=', $user->id)->avg('error');
        $max_time = DB::table('typing_tests')->where('user_id', '=', $user->id)->sum('time');
        $max_typed = DB::table('typing_tests')->where('user_id', '=', $user->id)->sum('typed');
        $reviews = DB::table('reviews')->where('user_id', '=', $user->id)->count('id');
        $all_tests = DB::table('typing_tests')->where('user_id', '=', $user->id)->orderByDesc("created_at")->get();

        return Inertia::render('Profile/Index', [
            'user' => $user,
            'stats' => $stats,
            'total_test' => $total_test,
            'average_wpm' => $average_wpm,
            'average_accuracy' => $average_accuracy,
            'average_error' => $average_error,
            'max_time' => $max_time,
            'max_typed' => $max_typed,
            'reviews' => $reviews,
            'all_tests' => $all_tests
        ]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
