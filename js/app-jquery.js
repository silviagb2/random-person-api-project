$(function () {
    $('#btn').on('click', function () {
        $.ajax({
            // la URL para la petición
            url : 'https://randomuser.me/api/',

            // especifica si será una petición POST o GET
            type : 'GET',

            // el tipo de información que se espera de respuesta
            dataType : 'json',

            // código a ejecutar si la petición es satisfactoria;
            // la respuesta es pasada como argumento a la función
            success : 
            function(json) {
                console.log(json)
                $("#photo").attr('src',json.results[0].picture.large)
                $('#first').text(json.results[0].name.first)
                $('#last').text(json.results[0].name.last)
                $('#country').text(json.results[0].location.country)
                $('#phone').text(json.results[0].phone)
                $('#email').text(json.results[0].email)
            },
        });
    });
})
