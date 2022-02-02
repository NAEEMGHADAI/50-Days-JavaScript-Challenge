/*

Convert given seconds to space age on all planets of our solar system
Instructions
Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
Pluto is not a planet

So if your function was called with 436575687 as the argument i.e spaceAge(436575687) it should return { "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }

IMPORTANT!!

Your spaceAge function should return the (already given) yearsInAllPlanets object after setting age on each planet (each property of the object)

THE VALUE OF EACH PROPERTY SHOULD BE A NUMBER AND SHOULD HAVE MAXIMUM 2 DIGITS AFTER THE POINT example 4.34

function spaceAge(436575687) should return { "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }
spaceAge(65965561) should return { 'Mercury': 8.68 'Venus': 3.4 'Earth': 2.09 'Mars': 1.11 'Jupiter': 0.18 'Saturn': 0.07 'Uranus': 0.02 'Neptune': 0.01 }

*/

const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	};
	const palentYear = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1.0,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	};
	yearsInAllPlanets.Mercury = parseFloat(
		(seconds / (palentYear.Mercury * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Venus = parseFloat(
		(seconds / (palentYear.Venus * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Earth = parseFloat(
		(seconds / (palentYear.Earth * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Mars = parseFloat(
		(seconds / (palentYear.Mars * 31557600)).toFixed(2)
	);

	yearsInAllPlanets.Jupiter = parseFloat(
		(seconds / (palentYear.Jupiter * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Saturn = parseFloat(
		(seconds / (palentYear.Saturn * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Uranus = parseFloat(
		(seconds / (palentYear.Uranus * 31557600)).toFixed(2)
	);
	yearsInAllPlanets.Neptune = parseFloat(
		(seconds / (palentYear.Neptune * 31557600)).toFixed(2)
	);

	return yearsInAllPlanets;
};

console.log(spaceAge(Math.round(39761832)));
