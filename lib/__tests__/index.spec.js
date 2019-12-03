const mdLinks = require('../index.js')

test("Markdown Links Library", () =>{
    expect(typeof mdLinks).toBe('function');
});

test("returns array of objects containing links and references", () => {
    return mdLinks('lib/testlinks.md').then(data => {
        expect(data).toEqual([ { text: 'Markdown', href: 'http://ww.markdown.com/' }, { text: 'Sobre Node.js - Documentação oficial', href: 'https://nodejs.org/pt-br/about/' }, { text: 'Node.js file system - Documentação oficial', href: 'https://nodejs.org/api/fs.html' }])
    })
});

test("returns array of objects containing links, references and status", () => {
    return mdLinks('lib/testlinks.md', '--validate').then(data => {
        expect(data).toEqual([ { text: 'Markdown', href: 'http://ww.markdown.com/', status: 'URL NOT FOUND' }, { text: 'Sobre Node.js - Documentação oficial', href: 'https://nodejs.org/pt-br/about/', status: 'OK' }, { text: 'Node.js file system - Documentação oficial', href: 'https://nodejs.org/api/fs.html', status: 'OK' }])
    })
});

test('function fails with an error', () => {
    return mdLinks('lib/testlinks.md').catch(e => expect(e).toMatch('error'));
});

test('file not found', () => {
    return mdLinks('lib/test.md').catch(e => expect(e.code).toEqual('ENOENT'));
});

test('file has no links', () => {
    return mdLinks('lib/testwithoutlinks.md').catch(e => expect(e).toMatch('error'));
});