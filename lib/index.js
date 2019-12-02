function mdLinks (pathway){
    return new Promise((resolve, reject) => {
        //const path = require('path');
        //const ext = path.extname(pathway);
        //if(ext==='.md'){
            const fs = require('fs');
            fs.readFile(pathway, 'utf8', (err, data) => {
                if(err) {
                    
                    reject(err);

                } else{

                    const text = data.toString();
    
                    const rxGlobal = /\[(?<text>[^\s].*\s*?)\]\((?<href>https?:\/\/\S+?)\)/g;
                    const rx = /\[(?<text>[^\s].*\s*?)\]\((?<href>https?:\/\/\S+?)\)/;
        
                    const matchAllLinks = text.match(rxGlobal);
                    resolve(matchAllLinks.map(el => el.match(rx).groups));
                }
            });
        //}
    })
}


module.exports = mdLinks;

/*

\[(?<text>[^\s].*\n*)\]\((?<href>https?:\/\/.+?)\)
\[(?<text>[^\s].*\n*?)\]\((?<href>https?:\/\/\S+?)\)

*/