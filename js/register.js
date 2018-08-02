(function($) {
    $(document).ready(function() {
       //console.log("ready");




        // Get the modal
        var modal = document.getElementById('registrationModal');

        // Get the button that opens the modal
        var btn = document.getElementById("registrationButton");

        // Get the button that opens the modal
        var btn_lg = document.getElementById("registrationButtonLG");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            //modal.style.display = "block";


            $(modal).fadeIn();
        }

        btn_lg.onclick = function() {
            //modal.style.display = "block";
            $(modal).fadeIn();
        }

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            $(modal).fadeOut();
            //modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                //modal.style.display = "none";
                $(modal).fadeOut();
            }
        }

    });
})(jQuery);


function register()
{













}

