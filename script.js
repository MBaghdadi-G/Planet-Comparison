const planets = {
    mercury: { mass: 0.055, moons: 0, diameter: 4879, temp: 167 },
    venus: { mass: 0.815, moons: 0, diameter: 12104, temp: 464 },
    earth: { mass: 1, moons: 1, diameter: 12742, temp: 15 },
    mars: { mass: 0.107, moons: 2, diameter: 6779, temp: -65 },
    jupiter: { mass: 317.8, moons: 79, diameter: 139820, temp: -110 },
    saturn: { mass: 95.2, moons: 83, diameter: 116460, temp: -140 },
    uranus: { mass: 14.5, moons: 27, diameter: 50724, temp: -195 },
    neptune: { mass: 17.1, moons: 14, diameter: 49244, temp: -200 }
};

const planet1 = document.getElementById("planet1");
const planet2 = document.getElementById("planet2");

Object.keys(planets).forEach(planet => {
    planet1.innerHTML += `<option value="${planet}">${planet.charAt(0).toUpperCase() + planet.slice(1)}</option>`;
    planet2.innerHTML += `<option value="${planet}">${planet.charAt(0).toUpperCase() + planet.slice(1)}</option>`;
});

planet1.addEventListener("change", updateComparison);
planet2.addEventListener("change", updateComparison);

function updateComparison() {
    let p1 = planets[planet1.value];
    let p2 = planets[planet2.value];

    compareValues("mass", p1.mass, p2.mass);
    compareValues("moons", p1.moons, p2.moons);
    compareValues("diameter", p1.diameter, p2.diameter);
    compareValues("temp", p1.temp, p2.temp);

    document.getElementById("planet-img1").src = `imgs/${planet1.value}.png`;
    document.getElementById("planet-img2").src = `imgs/${planet2.value}.png`;

    updateMassVisual(p1.mass, p2.mass);
}

function compareValues(id, value1, value2) {
    document.getElementById(id + "1").innerText = value1;
    document.getElementById(id + "2").innerText = value2;
    document.getElementById("arrow-" + id).innerText = value1 > value2 ? "◀" : "▶";
}

function updateMassVisual(value1, value2) {
    let massIcons1 = document.getElementById("mass-icons1");
    let massIcons2 = document.getElementById("mass-icons2");

    massIcons1.innerHTML = generatePlanetIcons(value1, planet1.value);
    massIcons2.innerHTML = generatePlanetIcons(value2, planet2.value);
}

function generatePlanetIcons(mass, planet) {
    let count = Math.round(mass);
    let planetImg = `imgs/${planet}.png`;
    let iconsHTML = "";

    for (let i = 0; i < count; i++) {
        iconsHTML += `<div class="mass-icon" style="background-image: url('${planetImg}')"></div>`;
    }

    return iconsHTML;
}

updateComparison();
