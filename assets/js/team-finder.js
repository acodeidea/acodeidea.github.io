//  team finder for office activity


// variable declaration
var team = '',
    selectedTeamMembers = [],
    participants = [],
    participantsIndex = {},
    generateTeamList = '',
    resultTable = '',
    message = '';


$(function() {

    // Error alert hide
    $("#error-display").hide();


    // Load team json
    $.getJSON("/apps/team.json",


        function(data) {
            $("#viewScoreBoardDetails").hide();
            $("#hideScoreBoard").hide();

            $.each(data, function(key, value) {
                if (value.active) {
                    team += '<div class="col-lg-3 col-md-6 col-sm-12">'
                    team += '<div class="form-check form-check-inline">'
                    team += '<input class="form-check-input" type="checkbox" id="inlineCheckbox' + value.teamId + '" value="' + value.name + '">'
                    team += '<label class="form-check-label" for="inlineCheckbox' + value.teamId + '">' + value.name + '</label>'
                    team += '</div>'
                    team += '</div>'
                }
            });
            $('#team-container').append(team);
        });
});

//Generate button function
$("#btnGenerate").click(function() {
    // var generateCount = parseInt($("#generateTeam option").filter(":selected").text(), 10);
    var generateCount = $('#generateTeam').val();
    selectedTeamMembers = $('input[type=checkbox]:checked').map(function(_, el) {
        return $(el).val();
    }).get();
    if (generateCount > 0 && generateCount <= selectedTeamMembers.length && selectedTeamMembers.length !== 0) {
        if ($("#generate-card-team").find("#prev-contents").length > 0) {
            clear();
            chunkArray(selectedTeamMembers, generateCount);
        } else {
            chunkArray(selectedTeamMembers, generateCount);
        }

    } else {
        if (selectedTeamMembers.length === 0) {
            // $("#error-display").show();
            message = "Please select team participants!!";
            alert(message);
            // errorMessage(message);
        } else {
            // $("#error-display").show();
            message = "Please enter the valid number of teams!"
            alert(message);
            // errorMessage(message);
        }
    }
});


// clearing previous div contents
function clear() {
    $('#result-table').empty();
    $('#generate-card-team').empty();

}


// display alert error message
function errorMessage(message) {
    let errorMessage = ''
    errorMessage += message
    $('#error-message').html(errorMessage);

}


// for table and card
function chunkArray(arr, n) {

    const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

    generateTeamList = '';
    resultTable='';

    var chunkLength = Math.max(arr.length / n, 1);
    var chunks = [];

    for (var i = 0; i < n; i++) {
        if (chunkLength * (i + 1) <= arr.length) chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
        generateTeamList += '<div class="col-lg-6 col-md-12 col-sm-12" id="prev-contents">'
        generateTeamList += '<div class="card">'
        generateTeamList += '<h5 class="card-header">Team ' + alphabet[i] + '<span class="float-right" id=' + i + '>'
        generateTeamList += '<button type="button" class="mr-1 btn btn-success btn-sm" id="addBtn" onclick="addScore(' + i + ', 5)">+5</button>'
        generateTeamList += '<button type="button" class="mr-1 btn btn-danger btn-sm" id="subBtn" onclick="addScore(' + i + ', -5)">-5</button>'
        generateTeamList += '<button type="button" class="mr-1 btn btn-success btn-sm" id="addBtn" onclick="addScore(' + i + ', 10)">+10</button>'
        generateTeamList += '<button type="button" class="btn btn-danger btn-sm" id="subBtn" onclick="addScore(' + i + ', -10)">-10</button> ='
        generateTeamList += '<span id="sum' + i + '">0</span></span></h5>'
        generateTeamList += '<div class="card-body">'

        var teamData = chunks[i];
        $.each(teamData, function(key, value) {
            if (key > 0) {
                generateTeamList += '<p class="card-text">' + value + '</p>'
            } else {
                generateTeamList += '<p class="card-text">' + value + '<span class="btn btn-sm btn-danger float-right">LEADER</span></p>'
            }

        });

        generateTeamList += '</div>'
        generateTeamList += '</div>'
        generateTeamList += '</div>'
        generateTeamList += '<br>'
        resultTable += '<tr><th scope="row">' + (i + 1) + '</th>'
        resultTable += '<td>Team ' + alphabet[i] + '</td>'
        resultTable += '<td><span id="tablesum' + i + '"></span></td>'
        resultTable += '</tr>'

    }

    $('#result-table').html(resultTable);
    $('#generate-card-team').html(generateTeamList);
    return chunks;
}



// View/Hide score button
$("#viewScoreBoard").click(function() {
    $("#viewScoreBoard").hide();
    $("#hideScoreBoard").show();
    $("#viewScoreBoardDetails").show();

});

$("#hideScoreBoard").click(function() {
    $("#viewScoreBoard").show();
    $("#hideScoreBoard").hide();
    $("#viewScoreBoardDetails").hide();
});


// score calculation
function addScore(index, point) {
    try {
        var scoreSpan = $("#sum" + index);
        var currentScore = parseInt(scoreSpan.text()) + point;
        var tableSpan = $("#tablesum" + index);

        $(scoreSpan).html(currentScore);
        $(tableSpan).html(currentScore);

    } catch (err) {
        alert('Error occured: ' + err.message);
    }
}