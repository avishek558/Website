        document.getElementById("bookingForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent page reload
            
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let eventName = document.getElementById("event").value;
            let date = document.getElementById("date").value;

            if(name && email && eventName && date){
                document.getElementById("confirmation").innerText = 
                    "✅ Thank you, " + name + "! Your booking for " + eventName + " on " + date + " has been confirmed.";
                document.getElementById("bookingForm").reset();
            } else {
                document.getElementById("confirmation").innerText = "⚠️ Please fill all fields.";
            }
        });