# Journal Application

## Table of Contents

* [Instructions](#instructions)
* [Index.html](#index)
* [App.js](#app)
* [Styles.css](#style)
* [Server.js](#server)
* [Running](#running)

## Instructions

This Journal App uses API information as well as user data in order to capture the time, tempature, and feelings a user has and puts them on display for the user to see.

## Index

The index.html file contains the skeleton to manipulate the elements as well as capture data on the page using javascript.

## App

This is where the functionality is contained. We use javascript validation in order to see if the user has input all the data and fire a function if that is the case. With async promises we capture user data as well as fetch API data and store it in our node server. 

## Styles

Contains styles for the page as well as the animation that is being shown in the background.

## Server

The server was built using node.js and the express framework. We also use the body-parser and cors packages as middleware. The server stores all the data and contains both POST and GET routes. 

## Running 

In order to run this project you must install node onto your local machine using the command line. You can also install express, body-parser, and cors. After that you can clone the repo and open in your code editor.