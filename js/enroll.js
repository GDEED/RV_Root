
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

                if(response.result == 'fail' && response.data == 'Invalid email for registration') {
                    swal("Error!", "Email you entered did not match your application email", "error");
                } else {
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

                    $(".release_submitted").show();
                }
            }

        }

    };
    reader.readAsDataURL(file);
}


$(".releaseSubmit").click(function(e){
    e.preventDefault;
        var name = $("#firstName").val();
        var action = $("#enrollmentForm").attr('action');

        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbyVPtaXDqPc4xNChZLcY-jsS9Mzi-7g3p_YfrDNqKx32MmnM861/exec",
            type:'POST',
            data:$('#enrollmentForm').serialize(),
            success:function(){
                $("#enrollment-hackathon").fadeOut();
                $("#enrollment-thankyou").fadeIn();
            }
        });
    
});