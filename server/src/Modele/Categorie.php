<?php
namespace customebox\modele;

class Categorie extends \Illuminate\Database\Eloquent\Model{
    protected $table = "categorie";
    protected $primaryKey = "id";

    public function hasProducts(){
        return $this->hasMany(Produit::class,'categorie');
    }
}

