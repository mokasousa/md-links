const request = require('request');

function mdLinks (pathway, option){
    return new Promise((resolve, reject) => {
            const fs = require('fs');
            fs.readFile(pathway, 'utf8', (err, data) => {
                if(err) {
                    
                    reject(err);

                } else{

                    const text = data.toString();
    
                    const rxGlobal = /\[(?<text>[^\s].*\s*?)\]\((?<href>https?:\/\/\S+?)\)/g;
                    const rx = /\[(?<text>[^\s].*\s*?)\]\((?<href>https?:\/\/\S+?)\)/;
        
                    const matchAllLinks = text.match(rxGlobal);

                    if(Array.isArray(matchAllLinks)){
                        if(option) {
                            
                            const arrValidate = matchAllLinks.map(el => {
                                let href = el.match(rx)[2];
                                let text = el.match(rx)[1];
                                return requestArr(href, text).then(el => {return el});  
                            });

                            console.log(arrValidate)
                            console.log("haha")
                            Promise.all(arrValidate).then(results => {
                                resolve(results)
                            })

                        } else {
                            const arr = matchAllLinks.map(el => {
                                return { text: el.match(rx)[1], href: el.match(rx)[2] }
                            });
                            resolve(arr);
                        }
                        
                    } else {
                        reject('error');
                    }
                }
            });
    })
}

function requestArr(href, text) {
    return new Promise( (response, reject) => {
        request(href, error => error ? response({href: href, text: text, status: "URL NOT FOUND"}) : response({href: href, text: text, status: "OK"}));
    })
}

module.exports = mdLinks;

/*

\[(?<text>[^\s].*\n*)\]\((?<href>https?:\/\/.+?)\)
\[(?<text>[^\s].*\n*?)\]\((?<href>https?:\/\/\S+?)\)

*/