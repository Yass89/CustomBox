<?php

function Render($game)
{
    # code...
    echo 
    'ID : '.  $game->id .'<br>' . 
    'Name : '. $game->name.'<br>' . 
    'Alias : '.  $game->alias.'<br>' . 
    'Deck : '. $game->deck.'<br>' . 
    // $game->description. ':' . 
    '<br>';

}

function JSON ($game){
    echo json_encode($game);
}

?>