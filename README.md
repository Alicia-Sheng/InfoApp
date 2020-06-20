# InfoApp

UniSelfCare Intern Application Project for Alicia Sheng.

## Table of Contents

- [InfoApp](#InfoApp)
  - [Table of Contents](#table-of-contents)
  - [Background](#background)
  - [Features](#features)
    - [First Screen](#first-screen)
    - [Second Screen](#second-screen)
    - [Third Screen](#third-screen)
  - [Usage](#usage)
    - [Install](#install)
    - [Run](#run)
  - [Demo](#demo)
  - [License](#license)

## Background

- It is an app which collects the users' information and prints it out.

## Features

### First Screen

- The first screen asks the users to type and choose some basic information. The users can first input their name for the first question. They can then choose their birth month and date. The users can finally input their favorite food.
- There is a "Next" button which leads the users to the second screen after all questions are answered. If there are still some blank fields, there will be an alarm pops out.


### Second Screen

- The second screen asks the users to choose more information. The users can choose their favorite color, meal of the day, and their year in college.
- There is a "Go to Summary Screen" button which leads the users to the third screen after all questions are answered. If there are still some blank fields, there will be an alarm pops out.

### Third Screen

- The third screen is a summary screen which prints out all information the users input before. It prints out the users' name, birth month and date, favorite food, favorite color, favorite meal of the day, and year in college.
- There is a "Start Again" button which leads the users to the first screen if they want to answer again. The fields will become blank so that the users can input information again.

## Usage

### Install

First please go to the link and download the latest version of Node.js.
https://nodejs.org/en/download/

Also, please follow the link below and download Expo.
https://expo.io/

Remember to clone or download InfoApp to your local path.

After downloading Node.js, Expo, and InfoApp successfully, please open your terminal or powershell, go to the path of InfoApp, and type in the sentence below.

```sh
npm install
```

If you want to check the file on android simulator (which is something I am using), please go the the link and download the latest version of Android Studio.
https://developer.android.com/studio

### Run

Please open your terminal or powershell, go to the path of InfoApp, and type in the sentence below.

```sh
npm start
```

If you want to run it on Android studio, set a simulator in AVD manager, start it, and type "a" in your terminal or powershell.

## Demo

<img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/1.png" width="33%"> <img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/2.png" width="33%"> <img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/3.png" width="33%">

- The info app starts at the first screen. The users would see the app with all blank fields as shown in the first image.
- After I filled in all fields, the app looks like the second image.
- It can be seen in the third image that the page is scrollable.

<img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/4.png" width="33%"> <img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/6.png" width="33%"> <img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/5.png" width="33%">

- After pressing "Next" on the first screen, the users would see the second screen with blank fields as shown in the fourth image.
- After I filled in all fields, the app looks like the fifth image.
- The sixth images shows a situation where the user didn't fill in all fields but clicked "Go to Summary Screen". An alarm pops out. The "Next" button on the first screen works the same.

<img src="https://github.com/Alicia-Sheng/InfoApp/blob/master/screenshot/7.png" width="33%">

- The seventh image shows the third screen which is the summary screen. It prints out all information. If the user click the "Start Again" button, the app will lead the user to the first screen with all blank fields.

## License

[MIT](LICENSE)
