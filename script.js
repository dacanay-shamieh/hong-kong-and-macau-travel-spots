const guideName = 'Hong Kong & Macau Travel Spots';
const currentYear = 2026;
let = 0;

document.getElementById('guideName').textContent = guideName;
document.getElementById('copyright').textContent = `© ${currentYear} ${guideName}. All rights reserved.`;

//places
const places = ['Ngong Ping 360 Cable Car', 'Big Buddha', 'The Londoner Macau', 'Hong Kong Disneyland', 'Ruins of St. Paul'];
const placeCount = places.length;
document.getElementById('placeCount').textContent = placeCount;

//rating
const placeRating = 4.5;
const ratingLabel = document.getElementById("rating");

if (ratingLabel) {
    if (placeRating >= 4) {
        ratingLabel.textContent = "Highly recommended";
    } else if (placeRating >= 2.5) {
        ratingLabel.textContent = "Worth a visit";
    } else {
        ratingLabel.textContent = "Only if you're nearby";
    }
}

//budget
const priceLevel = 5;
const isOpen = true;
const budgetResult = document.getElementById("budget");

if (budgetResult) {
    const isAffordableAndOpen =
        priceLevel >= 3 && isOpen === true;

    budgetResult.textContent = isAffordableAndOpen
        ? "Good option right now"
        : "Maybe another time";
}

//distance
const walkingDistance = false;
const distanceNote = document.getElementById("distance");

if (distanceNote) {
    distanceNote.textContent = walkingDistance === true
        ? "Walking distance"
        : "Better to commute";
}

//console
console.log('Guide Name: ', guideName);
console.log('Current Year: ', currentYear);
console.log('Total Places: ', placeCount);