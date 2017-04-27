<?php
    // Connect to Mysql database.
    $db = new PDO("mysql:dbname=books;host=127.0.0.1", "root", "asdf1234");
    $db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $xml = new SimpleXMLElement("<?xml version='1.0'?><categories/>");

    $categories = $db->query("select category from category;");
    $rows = $categories->fetchAll(PDO::FETCH_ASSOC);
    foreach($rows as $row) {
        $a = $row['category'];
        $xml -> addChild('category', $a);
    }

    // http://stackoverflow.com/questions/1397036/how-to-convert-array-to-simplexml
    // array_walk_recursive($rows, array ($xml, 'addChild'));
    Header('Content-type: text/xml');
    echo ($xml->asXML());
?>