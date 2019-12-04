#!/usr/bin/env node

const mdLinks = require("./index.js");

const pathway = process.argv

mdLinks(pathway[2], pathway[3])
.then(result => {
  if(pathway[3] === '--validate') {
    result.forEach((el, index) => {
      console.log(index + ' => ' + el.href, el.text, el.status)
    })
  } else {
    result.forEach((el, index) => console.log(index + ' => ' + el.href, el.text))
  }
})
.catch(err => console.log(err));