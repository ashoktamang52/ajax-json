<?php
    // Connect to Mysql database.
    $db = new PDO("mysql:dbname=books;host=127.0.0.1", "root", "asdf1234");
    $db -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $xml = new SimpleXMLElement("<?xml version='1.0'?><books/>");

    $query = "
        select t.title_name, p.price, a.author, y.year, c.category 
        from title t 
        join category c on c.category_id = t.category_id 
        join price p on t.title_id = p.title_id 
        join year y on y.title_id = t.title_id 
        join author a on a.author_id = t.author_id;
    ";

    $books = $db->query($query);
    $rows = $books->fetchAll(PDO::FETCH_ASSOC);
    foreach($rows as $row) {
        $book = $xml->addChild('book');
        $book->addChild('title', $row['title_name']);
        $book->addChild('category', $row['category']);
        $book->addChild('price', $row['price']);
        $book->addChild('year', $row['year']);
        $book->addChild('author', $row['author']);
    }

    // http://stackoverflow.com/questions/1397036/how-to-convert-array-to-simplexml
    // array_walk_recursive($rows, array ($xml, 'addChild'));
    Header('Content-type: text/xml');
    echo ($xml->asXML());
?>