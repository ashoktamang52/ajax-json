window.onload = getCategories;

function getCategories() {
    new Ajax.Request("booklist.php", {
            method: "get",
            onSuccess: showCategories
        });
}

function showCategories(ajax) {
    var categories = ajax.responseXML.getElementsByTagName("category");

    // create form
    var inputForm = document.createElement("form");
    inputForm.method = "POST";
    console.log($('books'));
    for (var i = 0; i < categories.length; i++) {
        console.log(categories[i]);
        var input = document.createElement("input");
        input.type = "radio";
        input.name = "category";
        input.value = categories[i].innerHTML;
        
        var label = document.createElement("label");
        var textNode = document.createTextNode(categories[i].innerHTML + " ");
        label.appendChild(textNode);
        
        inputForm.appendChild(input);
        inputForm.appendChild(label);
    }
    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "List Books";
    inputForm.appendChild(submitButton);
    $("books").appendChild(inputForm);
}