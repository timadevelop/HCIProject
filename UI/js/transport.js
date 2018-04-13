function filter(value) {
    var filter = value.toUpperCase();
    var lis = document.getElementsByClassName('transport_item');
    for (var i = 0; i < lis.length; i++) {
        var name = lis[i].getElementsByClassName('type')[0].innerHTML;
        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }

}

window.onload = function () {

  filter('own');
}
