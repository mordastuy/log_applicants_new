describe('Protractor Test', () => {

    const elementNameHead = element(by.css('.name-head a')),
          elementArrowUp  = element(by.css('.name-head .glyphicon.glyphicon-arrow-up'));

    it('should change sortType to DESC', () => {
        browser.get('http://localhost:3000/home');

        elementNameHead.click()
            .then(() => elementArrowUp.getCssValue('display'))
            .then(result => expect(result).not.toBe('none'))
            .then(() => elementNameHead.click())
            .then(() => elementArrowUp.getCssValue('display'))
            .then(result => expect(result).toBe('none'));
    });
});