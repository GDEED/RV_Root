(function($) {
    $(document).ready(function() {
       console.log("Ready to submit");


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


        $('#submit-form').on('click', function(e) {
            e.preventDefault();
            register();

        })


    });
})(jQuery);


function register()
{

    var $form = $('#test-form');
    var url = 'https://script.google.com/macros/s/AKfycbzErhOszv3CoMat488Y8sZ8oyAKqE60vqGmYbE2aqGmZVvidaM/exec?';

    // console.log("SUBMITTED");
    // console.log($form.serialize());

    var output_info = document.getElementById("test-form");
    var display = document.getElementById("display");
    var data = output_info.querySelectorAll("input:not([type=submit]), select");
    for (var i = 0; i < data.length; i++) {
        console.log( "name : " + data[i].name + " value:" + data[i].value );

        var addition;
        addition = data[i].name+"="+ data[i].value;
        addition = encodeURIComponent(addition);
        if(i == data.length-1)
        {
            url = url + addition;
        } else {
            url = url + addition +"&";
        }
    }
    console.log(url);


    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
    }).success(
        // do something
        console.log("SENT")
    );


}

