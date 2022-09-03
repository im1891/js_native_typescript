import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThan} from "./04_2";
import {city} from "../02/02.test";


test('Houses should be destroyed', () => {

        demolishHousesOnTheStreet(city, 'Happy street');

        expect(city.houses.length).toBe(1);
        expect(city.houses[0].id).toBe(1);


    }
)

test('Buildings with correct staff count', () => {

    let buildings = getBuildingsWithStaffCountGreaterThan(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})

