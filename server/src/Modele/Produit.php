<?php
namespace customebox\modele;

class Produit extends \Illuminate\Database\Eloquent\Model{
    protected $table = "produit";
    protected $primaryKey = "id";

    public function Categorie(){
        return $this->belongsTo(Categorie::class,'id') ;
    }
}

