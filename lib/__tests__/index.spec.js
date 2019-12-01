require('./index.js')

describe("Markdown Links Library", () =>{
    it('is a function', () => {
        expect(typeof mdLinks).toBe('function');
    })
    it("returns array of objects", () => {
        expect(mdLinks('../markdown.md')).toEqual([ { text: 'Markdown', href: 'http://ww.markdown.com/' }, { text: 'Sobre Node.js - Documentação oficial', href: 'https://nodejs.org/pt-br/about/' }, { text: 'Node.js file system - Documentação oficial', href: 'https://nodejs.org/api/fs.html' }])
    })
})
