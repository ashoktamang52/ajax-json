window.onload = getCategories;

function getCategories() {
    new Ajax.Request("booklist.php", {
            method: "get",
            onSuccess: showCategories
        });
}

function showCategories(ajax) {
    var unique_category = [];
    console.log(ajax.responseXML);
    var books = ajax.responseXML.getElementsByTagName("book");
    console.log(books);
    // create form
    var inputForm = document.createElement("form");
    inputForm.method = "POST";
    console.log($('books'));
    for (var i = 0; i < books.length; i++) {
        var category = books[i].getElementsByTagName("category")[0].firstChild.nodeValue;
        console.log(category);
        console.log(category.length);

        if (! unique_category.includes(category)) {
            unique_category.push(category);
            var input = document.createElement("input");
            input.type = "radio";
            input.name = "category";
            input.value = category;
            
            var label = document.createElement("label");
            var textNode = document.createTextNode(category + " ");
            label.appendChild(textNode);
            
            inputForm.appendChild(input);
            inputForm.appendChild(label);
        }
        
    }
    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "List Books";
    inputForm.appendChild(submitButton);
    $("books").appendChild(inputForm);
}