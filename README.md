# React Native E-commerce

This is an exercise in the practice of an e-commerce, or at least the most basic functionalities of an e-commerce to practice React Native with Redux

## Main Tools

- [React Native @0.63.4](https://reactnative.dev/) React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
- [React](https://reactjs.org/) A JavaScript library for building user interfaces
- [React Native Paper](https://callstack.github.io/react-native-paper/) Cross-platform Material Design for React Native
- [Redux](https://redux.js.org/) Helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.
- [Thunk](https://github.com/reduxjs/redux-thunk) Thunk middleware for Redux.

## Navigation and Architecture

This application consists of a tab navigator with nested stack navigators as shown in the figure

![Navigation Architecture](/assets/navigation.png)

## Redux store configuration

The redux store configuration was done as shown in the image below. It consists of 3 reducers combined in a root reducer and each of them has the actions and functions necessary to update the corresponding states

![Navigation Architecture](/assets/redux.png)

## API used for dummy data

The API used to obtain the fictitious data was the Books API form New York Times developer site, one of the 10th APIs exposed in the site [developer.nytimes.com](https://developer.nytimes.com/), which exposes data of the best sellers of the New York Times among other information.
![Navigation Architecture](/assets/api.png)

then the data is parsed and displayed with some styles into the application

## Video showing application functionalities

![Youtube]()

## Installation

First clone repository from github

```
clone https://github.com/MarlonAEC/e-commerce-native.git
```

then move to the main directory and install all dependencies

```
cd e-commerce-native
npm install
```

or using yarn instead

```
cd e-commerce-native
yarn install
```

then start expo metro bundle

```
expo start
```

on android emulator with expo apk installed in the emulator you should be able to see application running after run the command below

```
expo run:android
```

or you can scan QR code in Metro Bundle in your own cellphone with expo APK.
