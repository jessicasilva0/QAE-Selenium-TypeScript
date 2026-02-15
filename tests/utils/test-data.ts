import { faker } from "@faker-js/faker";
import { DateTime } from "luxon";

/**
 * Generate random departure information
 */
export const departureInfo = {
    departureFrom: faker.airline.airport().iataCode,
    arrivalTo: faker.airline.airport().iataCode,
    departureDate: DateTime.local().plus({ weeks: 3, days: 0 }).toFormat("dd/MM/yyyy"),
}


