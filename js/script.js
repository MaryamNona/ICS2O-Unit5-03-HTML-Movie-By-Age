// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Maryam Nona
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

function addAgeClicked () {
  // this function shows a random number 

  // input
  const user_age = parseInt(document.getElementById("age").value)

  // proces
  if (user_age > 17) { 
    document.getElementById('number').innerHTML = 'You can watch R movies alone.'
  } else if (user_age > 13) {
    document.getElementById('number').innerHTML = 'You can watch PG-13 Movies alone'
  } else if (user_age > 5) {
    document.getElementById('number').innerHTML = 'You can watch G or PG movies alone.'
  } else {
    document.getElementById('number').innerHTML = 'Too young.'
  }
}
