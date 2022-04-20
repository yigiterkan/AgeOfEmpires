import data from '../data/data.json'

export class unitService{
    static getAllUnits() {
      throw new Error('Method not implemented.');
    }

    getAllUnits(){

      return data.units;

    }
    getUnitById(id){

      return data.units.find(a =>a.id === id)

    }
    getUnitByFilter(age,cost){

    }
}