<!DOCTYPE html>
<html>
<head>
    <title> Books Search filter </title>
    <meta charset="UTF-8">

    <!-- For Prototype JS-->
    <script src="https://ajax.googleapis.com/ajax/libs/prototype/1.7.3.0/prototype.js"></script>

    <script src="books.js" type="text/javascript"></script>
</head>
<body>
    <div id="books">
        <form action="booklist.php">
        <input type="radio" name="category">Children
        <input type="radio" name="category">Finance
        <input type="radio" name="category">Computers
        <input type=submit value="list books">
    </div>
</body>
</html>

<?php
// Get communication format
$format = $_GET["format"];

if ($format == "json") {
    echo "JSON";
} else {
    echo "XML";
}
?>