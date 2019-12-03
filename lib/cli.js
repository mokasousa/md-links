#!/usr/bin/env node

const mdLinks = require("./index.js");

const pathway = process.argv
//console.log(process.argv);

// const request = require('request');

mdLinks(pathway[2], pathway[3])
.then(result => {
  if(pathway[3] === '--validate') {
    console.log(result)
    result.forEach((el, index) => {
      console.log(index + ' => ' + el.href, el.text, el.status)
    })
  } else {
    console.log(result)
    result.forEach((el, index) => console.log(index + ' => ' + el.href, el.text))
  }
})
.catch(err => console.log(err));