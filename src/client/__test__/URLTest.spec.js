import CheckFormatofURL from '../js/URLChecker.js'


describe('Test Regulare Expration Of URL', () => {
    test('Testing Check Format of URL function defined', () => {
        expect(CheckFormatofURL).toBeDefined();
    })

    test('Testing Check Format of URL return false for Wrong URL', () => {
        expect(CheckFormatofURL('Test Wrong')).toBeFalsy();
       
    })

    test('Testing Check Format of URL return true for Valid URL', () => {
        expect(CheckFormatofURL('www.github.com')).toBeTruthy();
    })
})