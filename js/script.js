// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 03/24/2023
// This file contains the JS functions for index.html

"use strict";

//This function will calculate the volume and suface area of a cone.
function calculateButtonClicked () {
 
  // Get the user input
  let radiusOfCone = parseFloat(document.getElementById('radius-cone').value)
  let heightOfCone = parseFloat(document.getElementById('height-cone').value)

  // Perform mathematical equations
  let volumeOfCone = Math.PI * radiusOfCone**2 * heightOfCone/3
  let surfaceAreaOfCone = Math.PI * radiusOfCone * (radiusOfCone + Math.sqrt(heightOfCone**2 + radiusOfCone**2))
  
  // Display the results
  document.getElementById('volume-cone').innerHTML = "The volume of the cone is " + volumeOfCone.toFixed(2) + " cm<sup>3</sup>."
  document.getElementById('surface-area-cone').innerHTML = "The surface area of the cone is " + surfaceAreaOfCone.toFixed(2) + " cm <sup>2</sup>."
}

//This function displays results if the Yes button is clicked.
function yesButtonClicked () {

  //Display text to the screen
  document.getElementById("radio-button").innerHTML = "<p>I'm glad you liked my web page!</p>"
}

//This function displays results if the No button is clicked.
function noButtonClicked () {

  //Display text to the screen
  document.getElementById("radio-button").innerHTML = "<p>I'm sorry you did not like my web page.</p>"
}