document.addEventListener('DOMContentLoaded', ()=>{
    const navButton = document.getElementById('icon');
    const navBar = document.getElementById('nav');
    // let isClickable = true;

    navButton.addEventListener('click', () => {
        // if (!isClickable) return;
        // isClickable = false; // Disable further clicks temporarily


        if (navBar.style.display == 'none'){
            navButton.setAttribute('src', '/static/pane-close.svg')
            navBar.style.display = 'block'
        } else{
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }


        // // Re-enable clicks after 0.5 seconds
        // setTimeout(() => {
        //     isClickable = true;
        // }, 500);
    });


    function handleResize() {
        if (window.innerWidth <= 1000) {
            navButton.setAttribute('src', '/static/pane-open.svg')
            navBar.style.display = 'none'
        }
    }
    
    // Run on page load
    handleResize();
    // Run on window resize
    window.addEventListener('resize', handleResize);
})



// document.addEventListener("DOMContentLoaded", function () {
//     const signUpButton = document.getElementById("signinBtn")

//     if (signUpButton) {
//         signUpButton.addEventListener("click", function (event) {
//             event.preventDefault();
            
//             // Create popup container
//             const popup = document.createElement("div");
//             popup.style.position = "fixed";
//             popup.style.top = "50%";
//             popup.style.left = "50%";
//             popup.style.transform = "translate(-50%, -50%)";
//             popup.style.padding = "20px";
//             popup.style.background = "#000";
//             popup.style.color = "#fff";
//             popup.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.2)";
//             popup.style.zIndex = "1000";
//             popup.style.borderRadius = "8px";
//             popup.style.textAlign = "center";
//             popup.style.border = "1px solid #fff";

//             // Create input field
//             const emailInput = document.createElement("input");
//             emailInput.type = "email";
//             emailInput.placeholder = "Enter your email";
//             emailInput.style.margin = "10px 0";
//             emailInput.style.padding = "8px";
//             emailInput.style.width = "100%";
//             emailInput.style.boxSizing = "border-box";
//             emailInput.style.background = "#222";
//             emailInput.style.color = "#fff";
//             emailInput.style.border = "1px solid #fff";

//             // Create submit button
//             const submitButton = document.createElement("button");
//             submitButton.textContent = "Submit";
//             submitButton.style.marginRight = "10px";
//             submitButton.style.background = "#fff";
//             submitButton.style.color = "#000";
//             submitButton.style.border = "none";
//             submitButton.style.padding = "8px 16px";
//             submitButton.style.cursor = "pointer";
//             submitButton.onclick = function () {
//                 const email = emailInput.value.trim();
//                 if (email) {
//                     fetch("/temp/store_email/", {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json"
//                         },
//                         body: JSON.stringify({ email })
//                     })
//                     .then(response => response.json())
//                     .then(data => {
//                         alert(data.message);
//                         document.body.removeChild(popup);
//                     })
//                     .catch(error => {
//                         alert("An error occurred");
//                     });
//                 } else {
//                     alert("Please enter a valid email");
//                 }
//             };

//             // Create close button
//             const closeButton = document.createElement("button");
//             closeButton.textContent = "Close";
//             closeButton.style.background = "#fff";
//             closeButton.style.color = "#000";
//             closeButton.style.border = "none";
//             closeButton.style.padding = "8px 16px";
//             closeButton.style.cursor = "pointer";
//             closeButton.onclick = function () {
//                 document.body.removeChild(popup);
//             };

//             // Append elements to popup
//             popup.appendChild(emailInput);
//             popup.appendChild(document.createElement("br"));
//             popup.appendChild(submitButton);
//             popup.appendChild(closeButton);
            
//             // Append popup to body
//             document.body.appendChild(popup);
//         });
//     }
// });