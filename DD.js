document.addEventListener('DOMContentLoaded', function () {
    // Set the max date to today (prevent future birthdates)
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('dob').setAttribute('max', today);
});

document.getElementById('deathForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    const name = document.getElementById('name').value;
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    // Validate that the birth date is not in the future
    if (dob > currentDate) {
        alert("Birth date cannot be in the future.");
        return;
    }

    // Calculate current age
    const age = currentDate.getFullYear() - dob.getFullYear();
    const deathAge = 70; // Average life expectancy
    const remainingYears = deathAge - age;

    // Calculate predicted death year
    const deathYear = dob.getFullYear() + deathAge;
    const deathDate = new Date(deathYear, dob.getMonth(), dob.getDate());
    const formattedDeathDate = deathDate.toISOString().split('T')[0];

    // Show the popup with results
    document.getElementById('deathDayText').innerText = `Your death day is: ${formattedDeathDate}`;
    document.getElementById('ageText').innerText = `Your current age: ${age}`;
    document.getElementById('remainingYearsText').innerText = `Remaining years: ${remainingYears}`;
    document.getElementById('deathAgeText').innerText = `Your expected death age: ${deathAge}`;
    document.getElementById('nameText').innerText = `Hello, ${name}!`;

    // Display the popup
    document.getElementById('popup').style.display = 'flex';
});

// Close the popup when the close button is clicked
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
