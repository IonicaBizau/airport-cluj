"use strict";

const scrapeIt = require("scrape-it");

/**
 * airportCluj
 * Live information about the departures and arrivals at the International Airpot Avram Iancu Cluj.
 *
 * @name airportCluj
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = {
    /**
     * arrivals
     * Get the list of arrivals.
     *
     * @name arrivals
     * @function
     * @return {Promise} The list of arrivals containing:
     *
     *    - `flight` (String): The flight number.
     *    - `destination` (String): The destination of the flight.
     *    - `time` (String): The time of the arrival.
     *    - `status` (String): The status of the flight.
     *    - `gate` (String): The gate of the flight.
     *
     */
    departures () {
        return scrapeIt("https://clj-ws.visionairfids.com/static-flights?type=departure", {
            flights: {
                listItem: ".flights__table tbody > tr",
                data: {
                    flight: ".flightNumber",
                    destination: ".remote",
                    time: ".time",
                    status: ".status",
                    gate: ".gate"
                }
            }
        }).then(({ data }) => data.flights.slice(1));
    },

    /**
     * arrivals
     * Get the list of arrivals.
     *
     * @name arrivals
     * @function
     * @return {Promise} The list of arrivals containing:
     *
     *   - `flight` (String): The flight number.
     *   - `origin` (String): The origin of the flight.
     *   - `time` (String): The time of the arrival.
     *   - `status` (String): The status of the flight.
     *
     */
    arrivals () {
        return scrapeIt("https://clj-ws.visionairfids.com/static-flights?type=arrival", {
            flights: {
                listItem: ".flights__table tbody > tr",
                data: {
                    flight: ".flightNumber",
                    origin: ".remote",
                    time: ".time",
                    status: ".status"
                }
            }
        }).then(({ data }) => data.flights.slice(1));
    }
}
