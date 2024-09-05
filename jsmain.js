document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formcall").addEventListener("submit", function(event) {
        event.preventDefault();

       
        var username = document.getElementById("username").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();

        
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        if (username === "") {
            alert("Username is required.");
        } else if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
        } else if (subject === "") {
            alert("Subject is required.");
        } else {
            
            document.getElementById("successmessage").style.display = "block";
            document.getElementById("formcall").reset();
        }

    });

    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box, index) {
        var button = box.querySelector('.btn');
        button.addEventListener('click', function() {
            boxes.forEach(function(b) {
                b.style.boxshadow = "";
            });
             box.style.boxShadow = "0 0 20px 10px rgba(0, 0, 0, 0.8)"; 
            switch(index) {
                case 0:
                    alert("This is a simple hotel management system designed in C++. This project was made for our requirements in Object-Oriented Programming");
                    break;
                case 1:
                    alert("This is PillPal, a simple medication reminder app. This is not a fully finished project yet. We only made the concept and UI design of it for our project in Software Engineering.");
                    break;
                case 2:
                    alert("This is License Tracker, a camera that collects license plate data. This is our project concept that we made for Algorithms and Complexity.");
                    break;
            }
        });
    });
});