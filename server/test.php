<?php
namespace customebox\control;
require 'vendor/autoload.php';
require_once './src/modele/Boite.php';
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

class Boite{

    public static function test(){
        $boites = \customebox\modele\Boite::select('id','taille')->get();
        print ($boites);
    }
    
}

$a = new Boite;
$a::test();