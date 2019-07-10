

export default class SwapiService {

  _apiBase = 'https://swapi.co/api';
  
  _imgBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person, id);
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet, id);
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship, id);
  }
  
  // getPersonImage = ({id}) => {
  //   return `${this._imgBase}/characters/${id}.jpg`;
  // }
  
  // getStarshipImage = ({id}) => {
  //   return `${this._imgBase}/starships/${id}.jpg`;
  // }
  
  // getPlanetImage = ({id}) => {
  //   return `${this._imgBase}/planets/${id}.jpg`;
  // }
 
  // _extractId = (item) => {
  //   //str.split('/') и взять предпоследний элемент
  //   const idRegExp = /\/([0-9]*)\/$/;
  //   return item.url.match(idRegExp)[1];
  // }

  _transformPlanet = (planet, id) => {
    return {
      id,
      image: `${this._imgBase}/planets/${id}.jpg`,
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship = (starship, id) => {
    return {
      id,
      image: `${this._imgBase}/starships/${id}.jpg`,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    };
  }

  _transformPerson = (person, id) => {
    return {
      id,
      image: `${this._imgBase}/characters/${id}.jpg`,
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    };
  }
}
