var SolarSystem = (function(){

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn,", "uranus", "neptune"];
	var dwarfPlanets = ["pluto"];
	var numPlanetsPeopleLandedOn = 0;
	
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var solarSystemAge = 0;

	return {
		getPlanets: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn++;
		},
		getDwarfPlanets: function(){
			return "they are rejects";
		},
		getStars: function(){
			return stars;
		},
		setStars: function(){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return solarSystemAge;	
		},
		setSolarSystemAge: function(){
			solarSystemAge++;
		}	
		
	}

})();

// console.log("Planets:", SolarSystem.getPlanets());
// console.log("Planets with people:", SolarSystem.getPlanetsLandedPeopleOn());
// console.log("Spaceships: ", SolarSystem.getSpaceships());
