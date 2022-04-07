# hw-05-Day-Planner
Day Planner

## Description

I wanted to make a day planner where I can enter in my to-do list by the hour. 

Visually, I wanted my day planner to have a color-code system based on the current time.

Refer to [Useage](#usage).


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

For installation, this application requires 3 files to be associated together in order to work. 
index.html is coded to display the content.
style.css is coded to style element used in the index.html file.
script.js contains the code for the day planner populate time blocks, compare time block hour to current time, and to save any entered text to be displayed on index.html.

Place the files in the same repository on Github for easy deployment.

While in the repository, select Settings and then select Pages that appears on the left side. 

On the Github pages screen, select the Branch drop down menu under the Source section and select 'main.' Then click Save. A URL with appear where the site has been published.

## Usage
![Screen Capture](./Work%20Day%20Scheduler.gif)

When the page is loaded, time block are created based on pre-determined hours in the script.js file. For now, there is a time block for each hour of an average 9-5 work day.

Each hourly time block has a text field for the user to enter tasks or other to-do's they are set to complete in that time block. There is a save button for each time block that will save entered text to Local Storage so if the user refreshes/reloads the page the text will remain.

The script.js also has code to change the styling of the time block based on whether the current time is before, current, or after the time block in the planner.

Gray = the time block is in the past
Red = that we are in the current hour
Green = that the time block is in the (near) future.

## Credits
index.html and style.css were provided by GT Bootcamp.

script.js was provided and modified by Chris Ginn.

## License

[GNU General Public License v3.0](./LICENSE)


