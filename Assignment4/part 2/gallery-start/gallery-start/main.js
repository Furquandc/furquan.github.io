/*
    Name: Furquan Abdurrahman
    File: main.js
    Date: 21 November 2023
    Assignment 4 part 2
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = { pic1: 'Close-up view of an eye', pic2: 'Cool painting', pic3: 'Purple and white flowers', pic4: 'Drawing of ancient Egypt', pic5: 'Butterfly on a large leaf' };

/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', Object.key{i});
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
