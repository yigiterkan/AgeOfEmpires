import { idText } from 'typescript';
import data from '../data/data.json'

export class unitService {

    getAllUnits() {

        return data.units;

    }
    getUnitById(id) {

        return data.units.find(a => a.id === id)

    }
    getUnitByAgeFilter(age, costs) {
        var costList = data.units;
        //var foundAge = costList.map(x => x.age);
        //var foundCost = costList.filter(x => x.cost);

        // var found = false;
        // for(var i = 0; i < costList.length; i++) {
        //     if (costList[i].cost === costs && costList[i].age === age) {
        //         found = true;
        //         break;
        //     }
        // }

       const results = costList.filter(element => {
           return element.age === age && element.cost === costs;
       })
       return results;

    }
}