/*
    Name: Furquan Abdurrahman
    File: main.js
    Date: 14 November 2023
    Assignment 4 part 1
*/

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let inserty = ["the soup kitchen", "Disneyland", "the White House"];
let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray();
    let yItem = randomValueFromArray();
    let zItem = randomValueFromArray();
    newStory.replaceAll('insertx', xItem);
    newStory.replaceAll('inserty', yItem);
    newStory.replaceAll('insertz', zItem);
    newStory = newStory

    if (customName.value !== '') {
        const name = customName.value;
        newStory.replaceAll('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300/14 + ' stone');
        const temperature = Math.round((94 - 32) * 5/9 + ' centigrade');

        newStory.replaceAll('300 pounds', weight);
        newStory.replaceAll('94 fahrenheit', temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}