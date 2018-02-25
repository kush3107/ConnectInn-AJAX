$.getScript('globals.js');

$(function () {
    'use strict';
    if (localStorage.getItem('auth_token')) {
        window.location = '../../index.html';
    }

    $('#loginForm').submit(function (e) {
        e.preventDefault();
        login($('input:first').val(), $('input:last').val(), function (data) {
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            location.reload();
        }, function (error) {
            $('.container')
                .prepend(`<div class="alert alert-danger alert-dismissible slideIn show" role="alert">${error.responseJSON.message}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button></div>`);
        });
    });
});