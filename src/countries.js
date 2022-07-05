window.countriesJS = function() {
    return {
        api : 'https://restcountries.com/v3.1',
        fields : 'cca2,name,flags,capital,population,region,subregion,currencies,borders,languages,tld',
        darkMode : Alpine.$persist(true),
        countries : {},
        searchCountry: '',
        regions : ['all', 'africa', 'america', 'asia', 'europe', 'oceania'],
        filtersOpen : false,
        selectedRegion: Alpine.$persist('Filter by Region'),
        showCountry : false,

        all() {
            fetch(this.api + '/all?fields=' + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.countries = data)
            return this.countries
        },

        byRegion(region) {
            fetch(this.api + '/region/' + region + '?fields=' + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.countries = data)
            return this.countries
        },

        single(name) {
            fetch(this.api + '/name/' + name + '?fields='  + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.countries = data)
            return this.countries
        },

        filterCountries(region) {
            if(region === 'all') {
                this.all()
            } else {
                this.byRegion(region)
            }
        }

    }
}