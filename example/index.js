"use strict";

const airportCluj = require("../lib");

(async () => {
    const arrivals = await airportCluj.arrivals();
    console.log(arrivals);
    // [
    //   ...
    //   {
    //     flight: 'W43412',
    //     origin: 'Valencia',
    //     time: '02:35',
    //     status: 'LANDED 02:22'
    //   },
    //   {
    //     flight: 'W43316',
    //     origin: 'Birmingham',
    //     time: '03:00',
    //     status: 'LANDED 02:35'
    //   },
    //   {
    //     flight: 'RO641',
    //     origin: 'Bucharest',
    //     time: '06:15',
    //     status: 'LANDED 05:49'
    //   },
    //   ...
    //   { flight: 'W43384', origin: 'Bergamo', time: '01:15', status: '' }
    // ]

    const departures = await airportCluj.departures();
    console.log(departures);
    // [
    //   ...
    //   {
    //     flight: 'FR844',
    //     destination: 'Bergamo',
    //     time: '10:00',
    //     status: 'AIRBORNE 10:04',
    //     gate: 'B6'
    //   },
    //   {
    //     flight: 'FR9546',
    //     destination: 'Charleroi',
    //     time: '10:40',
    //     status: 'BOARDING',
    //     gate: 'B5'
    //   },
    //   ...
    //   {
    //     flight: 'TK1348',
    //     destination: 'Istanbul',
    //     time: '21:45',
    //     status: '',
    //     gate: 'B1'
    //   }
    // ]
})();
