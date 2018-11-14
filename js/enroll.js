// (function($) {
//     $(document).ready(function() {
//        console.log("Ready to submit");


//         // Get the modal
//         var modal = document.getElementById('registrationModal');

//         // Get the button that opens the modal
//         var btn = document.getElementById("registrationButton");

//         console.log("THIS IS INIT");
//         // Get the button that opens the modal
//         var btn_lg = $('[data-toggle-modal="enroll"]');

//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];

//         // When the user clicks on the button, open the modal
//         btn.onclick = function() {
//             //modal.style.display = "block";


//             $(modal).fadeIn();
//         }

//         $(btn_lg).click(function(){
//             $(modal).fadeIn();
//         });
//         // btn_lg.onclick = function() {
//         //     console.log("CLICKED");
//         //     //modal.style.display = "block";
//         //     $(modal).fadeIn();
//         // }

//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function() {
//             $(modal).fadeOut();
//             //modal.style.display = "none";
//         }

//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 //modal.style.display = "none";
//                 $(modal).fadeOut();
//             }
//         }


//         // $('#submit-form').on('click', function(e) {
//         //     e.preventDefault();
//         //     enroll();
//         //
//         // })

//         $('#gform').submit(function(e){
//             e.preventDefault();



//             swal("Are you enrolling from within the European Union?", {
//                 buttons: {
//                     gdpr: "Yes",
//                     nongdpr: "No",
//                     cancel: true,
//                 },
//             }).then((value) => {
//                 switch (value) {

//                 case "gdpr":
//                     enroll("EU");
//                     break;
//                 case "nongdpr":
//                     enroll("US");
//                     break;
//                 default:
//                     $(modal).fadeOut();
//                     break;
//                 }
//             });


//             // EU - https://script.google.com/macros/s/AKfycbwmjYe6PNQgT8rPjQGRaRhjMS5TYbIU9WLn5oLJ/exec
//             // US - https://script.google.com/macros/s/AKfycbz6VNJ7Y8sWlcoOiTG2nl2Hd35IgvVy79VWcG_k/exec


//         });


//     });
// })(jQuery);


// function enroll(data)
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


// }

// $(".registrationSubmit").click(function(e){
// e.preventDefault;
//     var name = $("#firstName").val();
//     var action = $("#applicationForm").attr('action');

// swal("Are you enrolling from within the European Union?", {
//     buttons: {
//         gdpr: "Yes",
//         nongdpr: "No",
//         cancel: true,
//     },
// }).then((value) => {
//     switch (value) {

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


//     // console.log("action: " + action);



//     $.ajax({
//         url: action,
//         type:'POST',
//         data:$('#applicationForm').serialize(),
//         success:function(){
//             $("#registration-hackathon").fadeOut();
//             $("#registration-thankyou").fadeIn();
//         }
//     });





// });

// });



function UploadRelease() {

        var reader = new FileReader();
        var email = document.getElementById('email').value;
        var file = document.getElementById('SelectedRelease').files[0];
        reader.onload = function() {
        //document.getElementById('fileContent').value = reader.result;
        var contentType = reader.result.substr(5, reader.result.indexOf(';') - 5);
        document.getElementById('releaseFileContentType').value = contentType;
        // alert (document.getElementById('fileContentType').value);
        console.log(document.getElementById('releaseFileContentType').value);

        document.getElementById('releaseFileContent').value = reader.result.substr( reader.result.indexOf('base64,') + 7);
        var res = document.getElementById('releaseFileContent').value.substring(0, 100);
        // alert(res);

        console.log("response: " + res);

        document.getElementById('releaseFileName').value = file.name;
        document.getElementById('releaseFileSize').value = file.size;
        document.getElementById('applicantEmail').value = email;

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://script.google.com/macros/s/AKfycbzlShSlDCP0-8Ih0ig2s1wPgY9HmrpvRbzHL4hGrtN_Sv0avW-L/exec", true);
        xhr.onload = function(event){
            // alert("The server responded with: " + event.target.response);
            console.log("Responded With: " + event.target.response);
        };
        var formData = new FormData(document.getElementById("uploadRelease"));
        xhr.send(formData);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                // alert(xhr.responseText);
                console.log("xhr.responseText " + xhr.responseText.trim());

                var response = JSON.parse(xhr.responseText);
                console.log("result: " + response.result);
                console.log("data: " + response.data);


                swal("Nice!", "Your enrollment has been successfully submitted", "success");


                $("#releaseDriveLocation").attr("value",response.data);
                $("#resume").fadeOut();


                $("#SelectedRelease").fadeOut();
                $("#resumeWarning").fadeOut();
                $("#SelectedRelease").fadeOut();

                $("#loadRelease").attr("background","#4cae4c");
                $("#loadRelease").attr("disabled",true);
                $("#loadRelease").css("background","green");
                $("#loadRelease").css("color","white");
                $("#loadRelease").fadeOut();

                // $("#registrationSubmit").show();
                $(".release_submitted").show();
                // $("#registrationSubmit").attr("disabled",false);
                // $("#registrationSubmit").toggleClass("btn-primary");
            }

        }

    };
    reader.readAsDataURL(file);
}
