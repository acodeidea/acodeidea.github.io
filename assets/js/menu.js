/*
    Menu json append to All HTML pages.
    Developed on 23/09/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/about-menu.json",
        function(data) {
            var aboutMenu = ''
            $.each(data, function(key, value) {
                aboutMenu += '<li>'
                aboutMenu += '<a class="dropdown-item" href="' + value.url + '">'
                aboutMenu += value.name
                aboutMenu += '</a>'
                aboutMenu += '</li>'
            });
            $('#about-menu').append(aboutMenu);
        });




    // service drop dowm menu
    $.getJSON("/assets/data/service-menu.json",
        function(data) {
            var serviceMenu = ''
            $.each(data, function(key, value) {
                serviceMenu += '<li>'
                serviceMenu += '<a class="dropdown-item" href="' + value.url + '">'
                serviceMenu += value.menuName
                serviceMenu += '</a>'
                serviceMenu += '</li>'
            });
            $('#service-menu').append(serviceMenu);
        });

});