<?php

namespace App\Constants;

class AircraftLayout
{
    public const LAYOUTS = [
        'ATR' => [
            'rows' => 18,
            'columns' => ['A', 'C', 'D', 'F'],
        ],

        'Airbus 320' => [
            'rows' => 32,
            'columns' => ['A', 'B', 'C', 'D', 'E', 'F'],
        ],

        'Boeing 737 Max' => [
            'rows' => 32,
            'columns' => ['A', 'B', 'C', 'D', 'E', 'F'],
        ],
    ];
}