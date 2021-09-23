$(document).ready(function() {

    // service drop dowm menu

    $.getJSON("/assets/data/service-menu.json",
        function(data) {
            var serviceMenu = ''
            $.each(data, function(key, value) {
                serviceMenu += '<li>'
                serviceMenu += '<a class="dropdown-item" href="' + value.url + '">' + value.menuName + '</a>'
                serviceMenu += '</li>'
            });
            $('#service-menu').append(serviceMenu);
        });

});