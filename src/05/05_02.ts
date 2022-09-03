import {GovernmentBuildingsType, HousesType} from "../02/02_02";
import exp from "constants";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuildings: GovernmentBuildingsType[]) => governmentBuildings.map(b => `${b.address.street.title}`);


export const getStreetsTitlesOfHouses = (houses: HousesType[]) => houses.map(h => `${h.address.street.title}`);

export const createMessages= (houses: HousesType[]) => houses.map( h => `Hello guys from ${h.address.street.title}.`);