console.log("search.js loaded ✔");

async function searchDonors(){

    const city = document.getElementById("city").value.trim();
    const blood = document.getElementById("blood").value;

    const donors = await getDonors(blood, city);

    const results = document.getElementById("results");

    results.innerHTML = "";

    // LOADING EFFECT
    results.innerHTML = "<p>Searching donors...</p>";

    setTimeout(() => {

        let output = "";

        if(donors.length === 0){
            output = "<p>No donors found ❌</p>";
        } else {

            donors.forEach(d => {
                output += `
                <div class="card">
                    <div class="blood-badge">${d.blood_group.replace("_", "+")}</div>
                    <h3>${d.full_name}</h3>
                    <p class="city">📍 ${d.city}</p>
                    <button class="contact-btn">Contact Donor</button>
                </div>
                `;
            });
        }

        results.innerHTML = output;

    }, 600);
}
function contactDonor(name, phone){
    alert("Donor: " + name + "\n📞 Call: " + phone);
}