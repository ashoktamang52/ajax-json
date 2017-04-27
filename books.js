window.onload = getCategories;
var global_books;
function getCategories() {
    new Ajax.Request("booklist.php", {
            method: "get",
            onSuccess: showCategories,
            onFailure: showError,
            onException: showError
        });
}

function showCategories(ajax) {
    var unique_category = [];
    var books = ajax.responseXML.getElementsByTagName("book");
    global_books = books;
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
    submitButton.type = "button";
    submitButton.value = "List Books";
    submitButton.onclick = listbooks;
    inputForm.appendChild(submitButton);
    $("books").appendChild(inputForm);


}

function listbooks() {
    var books = global_books;
    var radios = document.getElementsByName('category');
    var unique_category;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            unique_category = radios[i].value;
            break;
        }
    }

    //books in category: ....
    var header = document.createElement("p");
    var text = document.createTextNode('Books in category ' + '"'+ unique_category + '"');
    header.appendChild(text);
    $("results").appendChild(header);

    // create html list for the results
    var ul = document.createElement("ul");
    for (var i = 0; i < books.length; i++) {
        var category = books[i].getElementsByTagName("category")[0].firstChild.nodeValue;
        if (unique_category === category) {
            var title = books[i].getElementsByTagName("title")[0].firstChild.nodeValue;
            var price = books[i].getElementsByTagName("price")[0].firstChild.nodeValue;
            var year = books[i].getElementsByTagName("year")[0].firstChild.nodeValue;
            var author = books[i].getElementsByTagName("author")[0].firstChild.nodeValue;
            
            var li = document.createElement("li");
            var info = title + ", by " + author + " (" + year + ")";
            console.log(info);
            var text = document.createTextNode(info);
            li.appendChild(text);
            ul.appendChild(li);
        }
    }
    $("results").appendChild(ul);

}

function showError() {
    alert("Error parsing XML to retrieve the required information");
}