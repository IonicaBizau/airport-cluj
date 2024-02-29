#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , airportCluj = require("..")
    ;

new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "type"
          , opts: ["t", "type"]
          , desc: "The type of the flight: arrivals | departures"
        }
    ],
    examples: [
        "airport-cluj --type arrivals",
        "airport-cluj --type departures"
    ]
}).main(async action => {
    if ([ "arrivals", "departures" ].indexOf(action.options.type.value) === -1) {
        console.log("Invalid type. Please use one of the following: arrivals, departures.");
        return;
    }
    console.log(await airportCluj[action.options.type.value](action.options.type));
});
