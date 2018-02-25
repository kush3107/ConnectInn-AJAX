$.apiUrl = 'http://api.connectinn.tk/api';

function login(email, password, success, error) {
    $.get(`${$.apiUrl}/authenticate?email=${email}&password=${password}`)
        .done(function (data) {
            success(data);
        })
        .fail(function (e) {
            error(e);
        });
}

function loadMyActivities(success) {
    $.ajax(`${$.apiUrl}/activities?include=members`, {
        headers: {'Authorization': `bearer ${localStorage.getItem('auth_token')}`},
        method: 'GET'
    })
        .done(function (data) {
            console.log(data);
            success(data.data);
        })
        .fail(function (e) {
            console.log(e);
        })
}