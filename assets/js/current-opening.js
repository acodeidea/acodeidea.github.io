$(document).ready(function() {


    $.getJSON("/careers/current-openings.json",
        function(data) {

            var currentOpening = '';
            currentOpening += '<div class="row mb-5" >'

            currentOpening += '<div class="col-lg-12 col-md-12 col-sm-12">'
            currentOpening += '<h3 class="career-title text-color-cyan text-center">OPEN POSITIONS</h3>'
            currentOpening += '</div>'

            currentOpening += '</div>'

            $.each(data, function(key, value) {
                currentOpening += '  <div class="mt-2 mb-2 shadow p-3 bg-white rounded zoom">'

                currentOpening += '<div class="row" >'

                currentOpening += '<div class="col-lg-2 col-md-12 col-sm-12 text-center">'
                currentOpening += '<span class="fa-stack fa-3x">'
                currentOpening += '<i class="fas fa-circle fa-stack-2x text-color-cyan"></i>'

                if (value.position_name == "JAVA DEVELOPER") {
                    currentOpening += '<i class="fab fa-java fa-stack-1x fa-inverse"></i>'
                } else if (value.position_name == "VALIDATION ENGINEER") {
                    currentOpening += '<i class="fas fa-balance-scale fa-stack-1x fa-inverse"></i>'
                } else if (value.position_name == "TRACKWISE EXPERTS") {
                    currentOpening += '<i class="fas fa-random fa-stack-1x fa-inverse"></i>'
                } else if (value.position_name == "SALESFORCE") {
                    currentOpening += '<i class="fa fa-cloud fa-stack-1x fa-inverse"></i>'
                } else {
                    currentOpening += '<i class="fas fa-bullhorn fa-stack-1x fa-inverse"></i>'
                }

                currentOpening += '</span><br><br>'
                currentOpening += '</div>'

                currentOpening += '<div class="col-lg-4 col-md-12 col-sm-12">'
                currentOpening += '<h5 class="text-color-dark text-center">' + value.position_name + '</h5>'

                currentOpening += '<p class="text-black-75 text-center"><b>Role: </b>' + value.role + '</p>'
                currentOpening += '<marquee class="text-center font-red">POSITIONS OPEN!!</marquee>'
                currentOpening += '</div>'

                currentOpening += '<div class="col-lg-2 col-md-12 col-sm-12">'
                currentOpening += '<p class="text-black-75 text-center">' + value.experience + '</p>'
                currentOpening += '</div>'

                currentOpening += '<div class="col-lg-2 col-md-12 col-sm-12">'
                currentOpening += '<p class="text-black-75 text-center">' + value.headquarters_name + '</p>'
                currentOpening += '</div>'

                currentOpening += '<div class="col-lg-2 col-md-12 col-sm-12">'
                currentOpening += '<p class="text-center"><a class="btn btn-md btn-cyan text-uppercase" target="blank" href="' + value.apply_link + '">APPLY</a></p>'
                currentOpening += '<p class="text-center text-black-75"><a class="text-color-dark" target="_blank" href="mailto:hr@acodeidea.com">hr@acodeidea.com</a></p>'
                currentOpening += '</div>'
                currentOpening += '</div>'

                currentOpening += '</div>'
            });
            $('#Current-opening').append(currentOpening);
        });

});

// currentOpening += '<div class="col-lg-6 col-md-12 col-sm-12">'
//                currentOpening += '  <div class="mt-5 shadow p-3 mb-5 bg-white rounded zoom mr-3 text-center">'
//                currentOpening += '<span class="fa-stack fa-3x">'
//                currentOpening += '<i class="fas fa-circle fa-stack-2x text-color-cyan"></i>'
//                if (value.position_name == "JAVA DEVELOPER") {
//                    currentOpening += '<i class="fab fa-java fa-stack-1x fa-inverse"></i>'
//                } else if (value.position_name == "VALIDATION ENGINEER") {
//                    currentOpening += '<i class="fas fa-balance-scale fa-stack-1x fa-inverse"></i>'
//                } else if (value.position_name == "TRACKWISE EXPERTS") {
//                    currentOpening += '<i class="fas fa-random fa-stack-1x fa-inverse"></i>'
//                } else if (value.position_name == "SALESFORCE"){
//                    currentOpening += '<i class="fa fa-cloud fa-stack-1x fa-inverse"></i>'
//                }
//                else{
//                    currentOpening += '<i class="fas fa-bullhorn fa-stack-1x fa-inverse"></i>'
//                }
//                currentOpening += '</span><br><br>'
//                currentOpening += '<h5 class="text-color-dark text-center">' + value.position_name + '</h5>'
//                currentOpening += '<br>'
//                currentOpening += '<p class="text-black-75"><b>Role: </b>' + value.role + '</p>'
//                currentOpening += '<p class="text-black-75"><b>Headquarters: </b>' + value.headquarters_name + '</p>'
//                currentOpening += '<p class="text-black-75"><b>Employment Type: </b>' + value.employment_type + '</p>'
//                currentOpening += '<p class="text-black-75"><b>Experience: </b>' + value.experience + '</p>'
//                currentOpening += '<br>'
//                currentOpening += '<p class="text-center"><a class="btn btn-md btn-cyan text-uppercase" href="' + value.apply_link + '">APPLY</a></p>'
//                currentOpening += '</div>'
//                currentOpening += '</div>'