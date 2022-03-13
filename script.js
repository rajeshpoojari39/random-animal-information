let animalImage = document.getElementById("animal-image");
let animalName = document.getElementById("animal-name");
let animalType = document.getElementById("animal-type");
let animalDiet = document.getElementById("animal-diet");
let animalHabitat = document.getElementById("animal-habitat");
let animalGeoRange = document.getElementById("animal-geo-range");
let animalLifespan = document.getElementById("animal-lifespan");

fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
  .then((response) => response.json())
  .then((data) => {
    animalImage.setAttribute("src", data.image_link);
    animalName.innerText = data.name;
    animalType.innerText = `Type - ${data.animal_type}`;
    animalDiet.innerText = `Diet - ${data.diet}`;
    animalHabitat.innerText = `Habitat - ${data.habitat}`;
    animalGeoRange.innerText = `Location - ${data.geo_range}`;
    animalLifespan.innerText = `Lifespan - ${data.lifespan} years`;
    console.log(data);
    console.log(data.name);
    console.log(data.animal_type);
    console.log(data.habitat);
    console.log(data.diet);
    console.log(data.geo_range);
    console.log(data.image_link);
    console.log(data.lifespan);
  });
