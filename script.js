document.addEventListener('DOMContentLoaded', function () {
    var nav = document.getElementById("navbar");
    var current_pos = nav.offsetTop;
    window.onscroll = function() {
        var window_pos = document.documentElement.scrollTop;
        if (window_pos >= current_pos + 50) {
            nav.classList.add("sticky");
            console.log("Here")
        }
        else {
            nav.classList.remove("sticky");
        }
    }
})