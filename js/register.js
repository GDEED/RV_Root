(function($) {
    $(document).ready(function() {
       console.log("Ready to submit");


        // Get the modal
        var modal = document.getElementById('registrationModal');

        // Get the button that opens the modal
        var btn = document.getElementById("registrationButton");

        console.log("THIS IS INIT");
        // Get the button that opens the modal
        var btn_lg = $('[data-toggle-modal="register"]');

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            //modal.style.display = "block";


            $(modal).fadeIn();
        }

        $(btn_lg).click(function(){
            $(modal).fadeIn();
        });
        // btn_lg.onclick = function() {
        //     console.log("CLICKED");
        //     //modal.style.display = "block";
        //     $(modal).fadeIn();
        // }

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


        // $('#submit-form').on('click', function(e) {
        //     e.preventDefault();
        //     register();
        //
        // })

        $('#gform').submit(function(e){
            e.preventDefault();



            swal("Are you registering from within the European Union?", {
                buttons: {
                    gdpr: "Yes",
                    nongdpr: "No",
                    cancel: true,
                },
            }).then((value) => {
                switch (value) {

                case "gdpr":
                    register("EU");
                    break;
                case "nongdpr":
                    register("US");
                    break;
                default:
                    $(modal).fadeOut();
                    break;
                }
            });


            // EU - https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec
            // US - https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec


        });


    });
})(jQuery);


function register(data)
{
    var modal = document.getElementById('registrationModal');
    if(data=="EU")
    {
        $.ajax({
            url:'https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec',
            type:'POST',
            data:$('#gform').serialize(),
            success:function(){
                swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
                $("input.form-control").val("");
                $(modal).fadeOut();
            }
        });

    }
    else if(data=="US")
    {
        $.ajax({
            url:'https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec',
            type:'POST',
            data:$('#gform').serialize(),
            success:function(){
                swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
                $("input.form-control").val("");
                $(modal).fadeOut();
            }
        });
    }


}

$(".registrationSubmit").click(function(e){
e.preventDefault;
    var name = $("#firstName").val();
    var action = $("#applicationForm").attr('action');

swal("Are you registering from within the European Union?", {
    buttons: {
        gdpr: "Yes",
        nongdpr: "No",
        cancel: true,
    },
}).then((value) => {
    switch (value) {

    case "gdpr":
        //EU
        action = "https://script.google.com/macros/s/AKfycbwgAg3ZbuLvDsffaYTzSvjFkVx-JJcduK9HbCMtVKxk2FlIXO72/exec";
        break;
    case "nongdpr":
        //US
        action = "https://script.google.com/macros/s/AKfycbzDxZJjZSrxmmChAfu24sT6H5wsvknKu4G8ImIl4XnNrtU0kWlR/exec";
        break;
    default:
        $(modal).fadeOut();
        break;
    }


    // console.log("action: " + action);



    $.ajax({
        url: action,
        type:'POST',
        data:$('#applicationForm').serialize(),
        success:function(){
            $("#registration-hackathon").fadeOut();
            $("#registration-thankyou").fadeIn();
        }
    });





});

});










function UploadFile() {

        var reader = new FileReader();
        var file = document.getElementById('SelectedFile').files[0];
        reader.onload = function() {
        //document.getElementById('fileContent').value = reader.result;
        var contentType = reader.result.substr(5, reader.result.indexOf(';') - 5);
        document.getElementById('fileContentType').value = contentType;
        // alert (document.getElementById('fileContentType').value);
        console.log(document.getElementById('fileContentType').value);

        document.getElementById('fileContent').value = reader.result.substr( reader.result.indexOf('base64,') + 7);
        var res = document.getElementById('fileContent').value.substring(0, 100);
        // alert(res);

        console.log("response: " + res);

        document.getElementById('fileName').value = file.name;
        document.getElementById('fileSize').value = file.size;
        //document.getElementById('uploadForm').submit();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbzwVsS4UO6O6IZu55VjzDspvxOmWUilh3g7xhdRCbOfNeIUCGeF/exec", true);
        xhr.onload = function(event){
            // alert("The server responded with: " + event.target.response);
            console.log("Responded With: " + event.target.response);
        };
        var formData = new FormData(document.getElementById("uploadForm"));
        xhr.send(formData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // alert(xhr.responseText);
                console.log("xhr.responseText " + xhr.responseText.trim());

                var response = JSON.parse(xhr.responseText);
                console.log("result: " + response.result);
                console.log("data: " + response.data);


                swal("Nice!", "Your resume has been successfully submitted", "success");


                $("#resumeDriveLocation").attr("value",response.data);
                $("#resume").fadeOut();


                $("#SelectedFile").fadeOut();
                $("#resumeWarning").fadeOut();
                $("#SelectedFile").fadeOut();

                $("#loadResume").attr("background","#4cae4c");
                $("#loadResume").attr("disabled",true);
                $("#loadResume").css("background","green");
                $("#loadResume").css("color","white");
                $("#loadResume").fadeOut();

                // $("#registrationSubmit").show();
                $(".resume_submitted").show();
                // $("#registrationSubmit").attr("disabled",false);
                // $("#registrationSubmit").toggleClass("btn-primary");
            }

        }

    };
    reader.readAsDataURL(file);
}
