<?php
namespace customebox\control;
require 'vendor/autoload.php';
require_once './src/modele/Categorie.php';
use Illuminate\Database\Capsule\Manager as DB;
$db = new DB();
$config = parse_ini_file('config.txt', true);

$db->addConnection([
    "driver" => $config['driver'],
    "host" => $config['hostname'],
    "database" => $config['dbname'],
    "username" => $config['user'],
    "password" => $config['pass'],
    'charset' => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix' => ''
]);

$db->setAsGlobal();
$db->bootEloquent();

class Categorie{

    public static function test(){
        $categories = \customebox\modele\Categorie::all();
        print ($categories);
    }
    
}

