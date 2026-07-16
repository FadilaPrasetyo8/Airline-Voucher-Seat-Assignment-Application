<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckVoucherRequest;
use App\Http\Requests\GenerateVoucherRequest;
use App\Http\Resources\VoucherResource;
use App\Models\Voucher;
use App\Services\SeatGeneratorService;


class VoucherController extends Controller
{
    public function check(CheckVoucherRequest $request) {
        $existingVoucher = $this->voucherExists($request->flightNumber, $request->date);

        if($existingVoucher) {
            return response()->json([
                'exists' => $existingVoucher,
            ], 200);
        }

        return response()->json([
            'exists' => $existingVoucher,
        ], 200);
    }

    public function generate(GenerateVoucherRequest $request, SeatGeneratorService $seatGenerator) {
        $existingVoucher = $this->voucherExists($request->flightNumber, $request->date);

        if($existingVoucher) {
            return response()->json([
                'exists' => $existingVoucher,
            ], 400);
        }

        $seats = $seatGenerator->generate($request->aircraft);

        $voucher = Voucher::create([
            'crew_name' => $request->name,
            'crew_id' => $request->id,
            'flight_number' => $request->flightNumber,
            'flight_date' => $request->date,
            'aircraft_type' => $request->aircraft,
            'seat1' => $seats[0],
            'seat2' => $seats[1],
            'seat3' => $seats[2],
        ]);

        return response()->json([
            'success' => true,
            'seats' => (new VoucherResource($voucher))->resolve(),
        ], 200);
    }

    private function voucherExists(string $flightNumber, string $flightDate){
        return Voucher::where('flight_number', $flightNumber)
        ->where('flight_date', $flightDate)
        ->exists();
    }
}
