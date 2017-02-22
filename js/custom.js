$(document).ready(function () {
    $(".show-nav").click(function () {
        $('#navbarModal').modal({
            show: true,
            // backdrop: false
        })
    });

    $(".nav-btn").click(function () {
        $("#navbarModal").modal('hide');
    });
});
