window.countriesJS = function() {
    return {
        darkMode : Alpine.$persist(true),
        isLoading : true,
        api : 'https://restcountries.com/v3.1',
        fields : 'cca3,name,flags,capital,population,region,subregion,currencies,borders,languages,tld',
        regions : ['all', 'africa', 'america', 'asia', 'europe', 'oceania'],
        selectedRegion: Alpine.$persist('Filter by Region'),
        filtersOpen : false,
        countries : [],
        singleCountry : false,
        showCountry : false,
        searchCountry: '',

        all() {
            fetch(this.api + '/all?fields=' + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => {this.countries = data; this.isLoading = false})
            return this.countries
        },

        byRegion(region) {
            fetch(this.api + '/region/' + region + '?fields=' + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => {this.countries = data; this.isLoading = false})
            return this.countries
        },

        single(cca3) {
            fetch(this.api + '/alpha/' + cca3 + '?fields='  + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => {this.singleCountry = data; this.isLoading = false})
            return this.singleCountry
        },

        searchByName(name) {
            if (this.searchCountry === '' || this.searchCountry === false) {
                this.filterCountries('all')
            } else {
                fetch(this.api + '/name/' + name + '?fields='  + this.fields, {cache: 'no-cache'})
                    .then(response => response.json())
                    .then(data => {this.countries = data; this.isLoading = false})
                return this.countries
            }
        },

        filterCountries(region) {
            if(region === 'all') {
                this.all()
                this.searchCountry = ''
            } else {
                this.byRegion(region)
                this.searchCountry = ''
            }
        }

    }
}