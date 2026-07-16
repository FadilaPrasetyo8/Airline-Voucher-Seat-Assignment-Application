<?php

namespace App\Services;

use App\Constants\AircraftLayout;
use InvalidArgumentException;

class SeatGeneratorService
{
    public function generate(string $aircraft): array
    {
        $seatMap = $this->buildSeatMap($aircraft);

        return $this->pickRandomSeats($seatMap);
    }

    private function buildSeatMap(string $aircraft): array
    {
        if (!isset(AircraftLayout::LAYOUTS[$aircraft])) {
            throw new InvalidArgumentException('Aircraft type is not supported.');
        }

        $layouts = AircraftLayout::LAYOUTS[$aircraft];

        $seatMap = [];

        for ($row = 1; $row <= $layouts['rows']; $row++) {
            foreach ($layouts['columns'] as $column) {
                 $seatMap[] = $row . $column;
            }
        }

        return $seatMap;
    }

    private function pickRandomSeats(array $seatMap): array
    {
        shuffle($seatMap);
        return array_slice($seatMap, 0, 3);
    }

   
}