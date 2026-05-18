const BASE_URL = "";

// 🩸 FAKE DONORS (PROFESSIONAL DEMO DATA)
const FAKE_DONORS = [
    { full_name: "Ahmed Raza", city: "Lahore", blood_group: "A_POS" },
    { full_name: "Ali Khan", city: "Karachi", blood_group: "O_POS" },
    { full_name: "Usman Tariq", city: "Islamabad", blood_group: "B_POS" },
    { full_name: "Hassan Ali", city: "Lahore", blood_group: "A_POS" }
];

// 🩸 SEARCH FUNCTION (NO BACKEND NEEDED)
async function getDonors(blood_group, city){

    return FAKE_DONORS.filter(d => {
        return (
            d.blood_group === blood_group &&
            d.city.toLowerCase() === city.toLowerCase()
        );
    });
}