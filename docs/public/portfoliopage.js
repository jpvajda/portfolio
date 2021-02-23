// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("contactModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// contact us form email send integration with AWS Lambda, API Gateway and SES. 
// Due to CORS issue using a .gmail.com recipient doesn't actually work but 
// this is to show the setup and functionality. 

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://auhtj9l5xd.execute-api.us-east-2.amazonaws.com/beta";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name").val())) {
        alert("Name can not less than 2 characters");
        return;
    }

    if ($("#email").val() == "") {
        alert("Please enter your email id");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email").val())) {
        alert("Please enter valid email address");
        return;
    }

    var name = $("#name").val();
    var email = $("#email").val();
    var data = {
        name: name,
        email: email,
    };

    $.ajax({
        type: "POST",
        url: "https://auhtj9l5xd.execute-api.us-east-2.amazonaws.com/beta",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),

        success: function () {
            // clear form and show a success message
            alert("Successful");
            document.getElementById("contact-form").reset();
            location.reload();
        },
        error: function () {
            // show an error message
            alert("UnSuccessful");
        }
    });
}