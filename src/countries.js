window.countriesJS = function() {
    return {
        countries : {},
        // darkMode : Alpine.$persist(true),
        // get startCountries() {
        //     fetch('https://restcountries.com/v3.1/alpha?codes=de,us,bra,isl,af,ala,alb,alg', {cache: 'no-cache'})
        //         .then(response => response.json())
        //         .then(data => this.countries = data)
        //     return this.countries
        // }
        country: [],
        getCountry() {
            fetch('https://restcountries.com/v3.1/alpha?codes=de', {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.country = data)
        }
    }
}