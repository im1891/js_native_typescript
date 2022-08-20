import {CityType} from "../02/02_02";
import {changeBudgetMoney, createMessage, destroyHouses, repairHouse, toFireStaff, toHireStaff} from "./03";



let city: CityType;

beforeEach(() => {
    city = {
        title: "New-York",
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            },
            {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
            {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL',
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str',
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for Hospital', () => {

    expect(city.governmentBuildings[0].budget).toBe(200000);

    changeBudgetMoney(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);
})

test('Budget should be changed for Fire-station', () => {

    expect(city.governmentBuildings[1].budget).toBe(500000);

    changeBudgetMoney(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);


})

test('Staff should be fired', () => {

})

test('Houses should be destroyed', () => {

    destroyHouses(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test('House should be repaired', () => {

    expect(city.houses[1].repaired).toBeFalsy();

    repairHouse(city.houses[0]);

    expect(city.houses[0].repaired).toBeTruthy();

})

// eslint-disable-next-line jest/no-identical-title
test('Staff should be fired', () => {

    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180);
})

test('Staff should be hired', () => {

    toHireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(220);
})

test('Greeting message should be correct for city', () => {

    let message = createMessage(city);

    expect(message).toBe('Hello New-York citizens. I want you to be happy. All 1000000 men')
})