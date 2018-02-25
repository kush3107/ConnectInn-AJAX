$.apiUrl = 'http://api.connectinn.tk/api/';

function login(email, password, success, error) {
    $.get(`${$.apiUrl}authenticate?email=${email}&password=${password}`)
        .done(function (data) {
            success(data);
        })
        .fail(function (e) {
            error(e);
        });
}