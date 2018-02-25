$(function () {
    loadMyActivities(function (activites) {
        for (const activity of activites) {
            $('#activitiesContainer').append(activityCard(activity));
        }
        $('[data-toggle="tooltip"]').tooltip();
    });
});