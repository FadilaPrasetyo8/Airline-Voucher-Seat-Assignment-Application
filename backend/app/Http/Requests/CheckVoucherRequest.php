<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class CheckVoucherRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'flightNumber' => 'required|string|max:255',
            'date' => 'required|date',
        ];
    }

    public function messages(): array
    {
        return [
            'flightNumber.required' => 'The flight number field is required.',
            'date.required' => 'The date field is required.',
            'date.date' => 'The date must be a valid date.',
        ];
    }
}
