import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";


export function addSkill(student: StudentType, skill: string) {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill,
    })
}

export const activateStudent = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}


export const changeBudgetMoney = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget;
}

export const destroyHouses = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true;
}

export const toFireStaff = (building: GovernmentBuildingsType, staffCountToFire: number) => {
    building.staffCount -= staffCountToFire;
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire;
}

export function createMessage(city: CityType) {
    return `Hello ${city.title} citizens. I want you to be happy. All ${city.citizensNumber} men`
}