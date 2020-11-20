<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:forms|string',
            'celular' => 'required|unique:forms|integer',
            'name' => 'required|string',
            'edad' => 'required|integer'
        ],
        [
            'required' => 'El :attribute es requerido',
            'unique' => 'El :attribute ya existe'
        ]);

        if ($validator->fails()) {
            return response()->json(['msg'=> $validator->errors(),'status' => 400]);
        }
        try {
            $form = new Form();
            $form->name = $request['name'];
            $form->email = $request['email'];
            $form->celular = $request['celular'];
            $form->edad = $request['edad'];
            $form->save();
            return response()->json(['msg' => 'Valores almacenados', 'status' => 200]);
        } catch (\Throwable $th) {
            return response()->json($th->getMessage(), 400);
        }
    }
}
