export default class SwapiServise {
  _apiBase = 'https://swapi.co/api';

  async getResorce(pach) {
    const res = await fetch(`${this._apiBase}${pach}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${pach}`); 
    }
    return await res.json();
  };

  getPerson(id) {
    return this.getResorce(`/people/${id}`);
  }

  async getAllPersons() {
    const res = await this.getResorce('/people/');
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResorce('/planets');
    return res.results;
  }

  getPlanet(id) {
    return this.getResorce(`/planets/${id}`);
  }

  async getAllStarShips() {
    const res = await this.getResorce('/starships/');
    return res.results;
  }

  getStarShip(id) {
    return this.getResorce(`/starships/${id}`);
  }
}

// getResource('https://swapi.co/api/people/1141414141414/')
//   .then((body) => {
//     console.log(body);
//   })
//   .catch((err) => {
//     console.log('ОШИБКА', err);
//   });