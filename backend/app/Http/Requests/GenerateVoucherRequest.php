<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class GenerateVoucherRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'id' => 'required|string|max:255',
            'flightNumber' => 'required|string|max:255',
            'date' => 'required|date',
            'aircraft' => 'required|in:ATR,Airbus 320,Boeing 737 Max',
        ];
    }

    public function messages(): array
    {
        return [
            'flightNumber.required' => 'Flight number is required.',
            'date.required' => 'Flight date is required.',
            'date.date' => 'Flight date must be a valid date.',
            'aircraft.required' => 'Aircraft type is required.',
            'aircraft.in' => 'The selected aircraft type is invalid.',
        ];
    }
}
