<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypingTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'wpm',
        'accuracy',
        'error',
        'typed',
        'time',
    ];

    /*
    public function user()
    {
        return $this->belongsTo(User::class);
    }*/
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
