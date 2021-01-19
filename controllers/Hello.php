<?php
namespace Slim\App\Controllers;

class Hello
{
    private $c;

    public function __construct($container)
    {
        $this->c = $container;
    }
    
    public function index($request, $response, $args)
    {
        // Sample log message
        $this->c->get('logger')->info("Slim-Skeleton '/' route");
        // Render index view
        return $this->c->get('renderer')->render($response, 'index.phtml', $args);
    }
}