function nextStep(answer) {

    const app = document.getElementById("app");

    if(answer === "no"){
        app.innerHTML = `
            <h2>Sorry ❌</h2>
            <p>You must be 18+ to donate blood.</p>
        `;
        return;
    }

    app.innerHTML = `
        <h2>Select Blood Group ❤️</h2>

        <div class="blood-group">
            <button onclick="showGender()">A+</button>
            <button onclick="showGender()">B+</button>
            <button onclick="showGender()">O+</button>
            <button onclick="showGender()">AB+</button>
        </div>
    `;
}

function showGender(){

    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Select Gender</h2>

        <div class="gender-container">

            <div class="gender-card" onclick="showCity()">
                <img src="../images/male.png">
                <h3>Male</h3>
            </div>

            <div class="gender-card" onclick="showCity()">
                <img src="../images/female.png">
                <h3>Female</h3>
            </div>

        </div>
    `;
}

function showCity(){

    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Select Your City 📍</h2>

        <div class="blood-group">
            <button onclick="showFinalForm('Karachi')">Karachi</button>

            <button onclick="showFinalForm('Lahore')">Lahore</button>

            <button onclick="showFinalForm('Islamabad')">Islamabad</button>

            <button onclick="showFinalForm('Multan')">Multan</button>
        </div>
    `;
}

function showFinalForm(city){

    const app = document.getElementById("app");

    app.innerHTML = `
        <h2>Registration Complete ❤️</h2>

        <p>Your Selected City:</p>

        <h3>${city}</h3>

        <button onclick="finishRegistration()">
            Continue
        </button>
    `;
}

function finishRegistration(){

    alert("Registration Successful ❤️");

    // 👉 next page open karo
    window.location.href = "../pages/dashboard.html";
}