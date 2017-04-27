window.onload = getCategories;

function getCategories() {
    new Ajax.Request("booklist.php", {
            method: "get",
            onSuccess: function(ajax) {console.log(ajax.responseText);}
        });

}