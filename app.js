let SubmitDetails = document.getElementById('userDetails');

SubmitDetails.addEventListener('submit', (event) => {
    event.preventDefault();

    let myFormData = new FormData(event.target);
    let userEmail = myFormData.get("email");
    
    let welcomeNote = `
          <h2> <span class="coloredTitle">Welcome</span> to <span class="coloredTitle">Gradie</span></h2>
          <p class="subheading">Get variety of beautiful gradients in few seconds</p>
          <p class="tips">
            You will get weekly tips and gradients suggestions sent to ${userEmail}
          </p>`;

    let welcomeContent = document.getElementById("welcome-text");
    welcomeContent.innerHTML = welcomeNote;
})