window.onload = getCategories;

function getCategories() {
    var query = new Ajax.Request("booklist.php", {
            method: "get",
            onSuccess: function() {alert("success");}
        });

}