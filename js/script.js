$(document).ready(function () {
    $(".myDate").each(function () {
        var text = $(this).text();
        // $(this).text(moment(new Date(text)).subtract(6, 'h').format('MM/DD/YYYY h:mm:ss A'));
        $(this).text(moment(new Date(text), 'MM/DD/YYYY h:mm:ss A', 'America/New_York').utc().format('MM/DD/YYYY h:mm:ss A'));
    });
});
