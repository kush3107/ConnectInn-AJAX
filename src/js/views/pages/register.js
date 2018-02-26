$(function () {


    $('#registerForm').submit(function (e) {
        e.preventDefault();
        register($('input:eq(0)').val(), $('input:eq(1)').val(),$('input:eq(2)').val(),$('input:eq(3)').val(), function (data) {
            localStorage.setItem('auth_token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location = '../../index.html'
        }, function (error) {
            $('.container')
                .prepend(`<div class="alert alert-danger alert-dismissible slideIn show" role="alert">${error.responseJSON.message}<button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button></div>`);
        });
    });

    $(document).on('click', '#signInButton', function () {
        window.location.href = 'login.html';
    });
});