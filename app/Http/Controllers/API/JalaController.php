<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class JalaController extends Controller
{
    //
    public function index(){
        $response = Http::get('https://app.jala.tech/api/shrimp_prices?search&with=creator,species,region&sort=size_100|creator.name,desc&region_id=33');
        return $response->json();
    }

    public function search(Request $request){
        $response = Http::get('https://app.jala.tech/api/shrimp_prices?search&with=creator,species,region&sort=size_100|creator.name,desc&region_id='.$request->myValue);
        return $response->json();
    }

    public function show($id){
        $response = Http::get('https://app.jala.tech/api/shrimp_prices/'.$id.'?with=species,region');
        return $response->json();
        // return $data;
    }

    public function lokasi(){
        $response = Http::get('https://app.jala.tech/api/regions?search&sort=&scope=province');
        return $response->json();
    }

    public function chart(Request $request){
        $response = Http::get('https://app.jala.tech/api/shrimp_prices?search&with=creator,species,region&sort=size_100|creator.name,desc&region_id='.$request->myValue);
        $json = $response->json();
        $data = [];
        for($i = 0; $i < count($json['data']); $i++){
            $data[] = [
                'date' => $json['data'][$i]['date'],
                'size100' => $json['data'][$i]['size_100']
            ];
        }
        foreach ($data as $param => $row) {
            $date[$param] = $row['date'];
          }
        array_multisort($date, SORT_ASC, $data);
        return $data;
    }
}
