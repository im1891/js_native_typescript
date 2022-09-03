import {CityType, GovernmentBuildingsType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {

    city.houses = city.houses.filter(h => !(h.address.street.title == street))
}

export const getBuildingsWithStaffCountGreaterThan = (buildings: GovernmentBuildingsType[], count: number) => buildings.filter(b => b.staffCount > 500);
