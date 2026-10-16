const guideName = 'Hong Kong & Macau Travel Spots';
const currentYear = 2026;
let = 0;

document.getElementById('guideName').textContent = guideName;
document.getElementById('copyright').textContent = `© ${currentYear} ${guideName}. All rights reserved.`;

//places
const places = ['Ngong Ping 360 Cable Car', 'Big Buddha', 'The Londoner Macau', 'Hong Kong Disneyland', 'Ruins of St. Paul'];
const placeCount = places.length;
document.getElementById('placeCount').textContent = placeCount;

function displayText(id, text) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}

//console
console.log('Guide Name: ', guideName);
console.log('Current Year: ', currentYear);
console.log('Total Places: ', placeCount);