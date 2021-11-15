$(document).ready(function() {


    $.getJSON("/assets/data/client-testimonials.json",
        function(data) {

            var testimonials = '';
            $.each(data, function(key, value) {
                testimonials += '<div class="mt-3 col-lg-2 col-md-4 col-sm-4 text-center">'
                testimonials += '<img class="rounded-circle  img-fluid" src="' + value.image + '">'
                testimonials += '<p class="mt-2 text-muted">'
                testimonials += '<strong>' + value.name + '</strong>'
                testimonials += '</p>'
                testimonials += '</div>'
                testimonials += '<div class="mt-3 col-lg-1 col-md-2 col-sm-4">'
                testimonials += '<span class="fa-stack fa-3x">'
                testimonials += '<i class="fas fa-quote-left fa-stack-2x text-white-50"></i>'
                testimonials += '</span>'
                testimonials += '</div>'
                testimonials += '<div class="mt-3 col-lg-9 col-md-6 col-sm-4">'
                testimonials += '<p class="text-black-75">'
                testimonials += '<i>'
                testimonials += value.message
                testimonials += '</i>'
                testimonials += '</p>'
                testimonials += '</div>'
            });

            $('#client-testimonials-section').append(testimonials);
        });

    $.getJSON("/assets/data/employee-testimonials.json",
        function(data) {

            var testimonials = '';
            $.each(data, function(key, value) {
                testimonials += '<div class="mt-3 col-lg-2 col-md-4 col-sm-4 text-center">'
                testimonials += '<img class="rounded-circle  img-fluid" src="' + value.image + '">'
                testimonials += '<p class="mt-2 text-muted">'
                testimonials += '<strong>' + value.name + '</strong>'
                testimonials += '</p>'
                testimonials += '</div>'
                testimonials += '<div class="mt-3 col-lg-1 col-md-2 col-sm-4">'
                testimonials += '<span class="fa-stack fa-3x">'
                testimonials += '<i class="fas fa-quote-left fa-stack-2x text-white-50"></i>'
                testimonials += '</span>'
                testimonials += '</div>'
                testimonials += '<div class="mt-3 col-lg-9 col-md-6 col-sm-4">'
                testimonials += '<p class="text-black-75">'
                testimonials += '<i>'
                testimonials += value.message
                testimonials += '</i>'
                testimonials += '</p>'
                testimonials += '</div>'
            });

            $('#employee-testimonials-section').append(testimonials);
        });

});