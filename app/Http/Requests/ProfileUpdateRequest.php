<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
            'bio' => ['string', 'max:255'],
            'keyboard' => ['string', 'max:255'],
            'twitter' => ['string', 'max:255'],
            'github' => ['string', 'max:255'],
            'website' => ['string', 'max:255'],
        ];
    }
}
