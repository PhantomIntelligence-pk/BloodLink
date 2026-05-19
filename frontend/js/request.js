async function loadRequests(){

    const requests = await getRequests();

    let output = "";

    if(requests.length === 0){
        output = "<p>No requests found</p>";
    }

    requests.forEach(req => {

        output += `
        <div class="card">
            <h3>🏥 ${req.hospital_name}</h3>
            <p class="city">📍 ${req.city}</p>
            <p>🩸 Blood: ${req.blood_group}</p>
            <p>📞 ${req.contact_phone}</p>
            <button class="contact-btn">Respond</button>
        </div>
        `;
    });

    document.getElementById("requestList").innerHTML = output;
}

loadRequests();