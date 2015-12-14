module.exports = (function() {

    var service = {
        NO_LANGUAGE: "xx",
        defaultLanguage: "en",
        extractName: function(names) {
            var res = names.filter(function(languageWrapper) {
                return (languageWrapper.lang == service.getCurrentLanguage() || languageWrapper.lang == service.NO_LANGUAGE);
            })[0];
            if (res) return res.name;
            else return names;
        },
        getCurrentLanguage: function() {
            if (service.currentLanguage) return service.currentLanguage;
            else return service.defaultLanguage;
        }
    };
    return service;

})();
