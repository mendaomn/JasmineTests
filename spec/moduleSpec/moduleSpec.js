describe("Module", function() {
    var module = require('../../module');

    it("should get default language", function() {
        expect(module.getCurrentLanguage()).toEqual("en");
    });

	it("should get english name COMPUTER", function() {
		var namesArray = [{
			lang: "en",
			name: "computer"
		},{
			lang: "fr",
			name: "ordinateur"
		}];

        expect(module.extractName(namesArray)).toEqual("computer");
    });    

});
