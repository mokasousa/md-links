#!/usr/bin/env node

const mdLinks = require("./index.js");

const pathway = process.argv
console.log(process.argv);

const request = require('request');

mdLinks(pathway[2])
.then(result => {
  if(pathway[3] === '--validate') {
    result.forEach((el, index) => {
      request(el.href, (error,response) =>{
        if(error){
          console.log(index + ' => ' + el.href, error)
        } else {
          console.log(index + ' => ' + el.href, el.text, response.statusCode);
        }
      })
    })
  } else {
    result.forEach((el, index) => console.log(index + ' => ' + el.href, el.text))
  }
})
.catch(err => console.log(err));