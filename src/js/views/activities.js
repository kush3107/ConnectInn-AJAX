$(function () {
    loadMyActivities(function (activites) {
        const container = $('#activitiesContainer');
        container.empty();
        for (const activity of activites) {
            container.append(activityCard(activity));
        }
        $('[data-toggle="tooltip"]').tooltip();
    });
});