(function($) {
    $(document).ready(function() {

        console.log( "slick ready!" );

        $('.slick-slider').slick({
            infinite: true,
            speed: 400,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
            prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });



    });
})(jQuery);


// function register(data)
// {
//     var modal = document.getElementById('registrationModal');
//     if(data=="EU")
//     {
//         $.ajax({
//             url:'https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec',
//             type:'POST',
//             data:$('#gform').serialize(),
//             success:function(){
//                 swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
//                 $("input.form-control").val("");
//                 $(modal).fadeOut();
//             }
//         });
//
//     }
//     else if(data=="US")
//     {
//         $.ajax({
//             url:'https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec',
//             type:'POST',
//             data:$('#gform').serialize(),
//             success:function(){
//                 swal("Thank you!", "We'll keep you posted on the upcoming registrations", "success");
//                 $("input.form-control").val("");
//                 $(modal).fadeOut();
//             }
//         });
//     }
//
//
// }
//
// $(".registrationSubmit").click(function(e){
// e.preventDefault;
//     var name = $("#firstName").val();
//     var action = $("#applicationForm").attr('action');
//
// swal("Are you registering from within the European Union?", {
//     buttons: {
//         gdpr: "Yes",
//         nongdpr: "No",
//         cancel: true,
//     },
// }).then((value) => {
//     switch (value) {
//
//     case "gdpr":
//         //EU
//         action = "https://script.google.com/macros/s/AKfycbwgAg3ZbuLvDsffaYTzSvjFkVx-JJcduK9HbCMtVKxk2FlIXO72/exec";
//         break;
//     case "nongdpr":
//         //US
//         action = "https://script.google.com/macros/s/AKfycbzDxZJjZSrxmmChAfu24sT6H5wsvknKu4G8ImIl4XnNrtU0kWlR/exec";
//         break;
//     default:
//         $(modal).fadeOut();
//         break;
//     }
//
//
//     // console.log("action: " + action);
//
//
//
//     $.ajax({
//         url: action,
//         type:'POST',
//         data:$('#applicationForm').serialize(),
//         success:function(){
//             $("#registration-hackathon").fadeOut();
//             $("#registration-thankyou").fadeIn();
//             ga('send', 'event', 'Application', 'app_submission', 'Event Application');
//         }
//     });
//
//
//
//
//
// });
//
// });
//
//








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

        //console.log("response: " + res);

        $('body').addClass('loading');

        document.getElementById('fileName').value = file.name;
        document.getElementById('fileSize').value = file.size;
        //document.getElementById('uploadForm').submit();

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbytXrHVWPxhx4VJx2XMX_Q17WuQghvV-z1eX3pg_0kvnAbKxDs3/exec", true);
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
                $('body').removeClass('loading');
                // $("#registrationSubmit").attr("disabled",false);
                // $("#registrationSubmit").toggleClass("btn-primary");
            }

        }

    };
    reader.readAsDataURL(file);
}
