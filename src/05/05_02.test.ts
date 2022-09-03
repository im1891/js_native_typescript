import {city} from "../02/02.test";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";
import exp from "constants";


beforeEach(() => city)

test('list of streets titles of governments buildings', () => {
let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})

test('list of streets titles of houses', () => {
let streetsNames = getStreetsTitlesOfHouses(city.houses)

    expect(streetsNames.length).toBe(3)
    expect(streetsNames[0]).toBe('White street')
    expect(streetsNames[1]).toBe('Happy street')
    expect(streetsNames[2]).toBe('Happy street')
})

test('create greeting messages for streets', () => {
 let messages=   createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White street.')
    expect(messages[1]).toBe('Hello guys from Happy street.')
    expect(messages[2]).toBe('Hello guys from Happy street.')
})