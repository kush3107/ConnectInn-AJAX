// Active ajax page loader
$.ajaxLoad = true;

//required when $.ajaxLoad = true
$.defaultPage = 'main.html';
$.subPagesDirectory = 'views/';
$.page404 = 'views/pages/404.html';
$.login = 'views/pages/login.html';
$.register = 'views/pages/register.html';
$.mainContent = $('#ui-view');

//Main navigation
$.navigation = $('nav > ul.nav');

$.panelIconOpened = 'icon-arrow-up';
$.panelIconClosed = 'icon-arrow-down';

//Default colours
$.brandPrimary = '#20a8d8';
$.brandSuccess = '#4dbd74';
$.brandInfo = '#63c2de';
$.brandWarning = '#f8cb00';
$.brandDanger = '#f86c6b';

$.grayDark = '#2a2c36';
$.gray = '#55595c';
$.grayLight = '#818a91';
$.grayLighter = '#d1d4d7';
$.grayLightest = '#f8f9fa';

var activityCard = function (activity) {
    return `<div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <span>${activity.title}</span>
                        <div class="card-actions">
                            <a href="#" class="btn-setting"><i class="icon-pencil"></i></a>
                            <a href="#" class="btn-close"><i class="icon-close"></i></a>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            ${activity.description}
                        </div>
                    <hr>
                        ${membersRow(activity.members.data)}
                    </div>
                </div>
            </div>`;
};

var membersRow = function (members) {
    let html = '<h5>Members</h5><div class="row">';
    for (const member of members) {
        const url = member.profile_pic ? member.profile_pic : 'http://via.placeholder.com/350x150';
        html += `<div class="col-3 justify-content-center">
                    <img data-toggle="tooltip" data-placement="top" title="${member.name}" style="width: 50px; height: 50px; cursor: pointer;" src="${url}" class="rounded-circle">
                </div>`;
    }

    if (members.length === 0) {
        html += '<span class="col-md-12 justify-content-center">No members yet! <button type="button" class="btn btn-outline-primary btn-sm rounded">Add One</button></span>';
    }

    html += '</div>';

    return html;
};
