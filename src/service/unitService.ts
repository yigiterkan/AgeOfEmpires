
import data from '../data/data.json'
import { MilitaryUnit } from '../data/UnitType'

export const unitService = {


    getUnitById: (id) => {
        var unit: MilitaryUnit = data.units.find(a => a.id == id) || <MilitaryUnit>{}
        return unit;

    },
    getUnitByFilter: (age, costs) => {
        var costList: MilitaryUnit[] = data.units;

        if (age !== "All") {
            costList = costList.filter(element => {
                return element.age === age
            })
        }

        if (costs.Gold) {
            costList = costList.filter(element => {
                return element.cost?.Gold && element.cost.Gold <= costs.Gold
            })
        }
        if (costs.Food) {
            costList = costList.filter(element => {
                return element.cost?.Food && element.cost.Food <= costs.Food
            })
        }
        if (costs.Wood) {
            costList = costList.filter(element => {
                return element.cost?.Wood && element.cost.Wood <= costs.Wood
            })
        }

        return costList;

    }
}