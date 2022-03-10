<?php
require_once 'vendor/autoload.php';
header('Access-Control-Allow-Origin: *');
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\App;
use Slim\Container;

use \customebox\control\Boite as Boite;
use \customebox\control\Categorie;
use \customebox\control\Produit;

$c = new \Slim\Container(['settings' => ['displayErrorDetails' => true]]);
$app = new \Slim\App($c);


$app->get('/Boite/getAll', function (Request $req, Response $res): Response {
    
    $res->write(Boite::test());
    return $res;
});

$app->get('/Categorie/getAll', function (Request $req, Response $res): Response {
    
    $res->write(Categorie::test());
    return $res;
});

$app->get('/Produit/getAll', function (Request $req, Response $res): Response {
    
    $res->write(Produit::test());
    return $res;
});


$app->run();
