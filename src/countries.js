window.countriesJS = function() {
    return {
        darkMode : Alpine.$persist(true),
        isLoading : true,
        api : 'https://restcountries.com/v3.1',
        fields : 'cca3,name,flags,capital,population,region,subregion,currencies,borders,languages,tld',
        regions : ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
        selectedRegion: Alpine.$persist('All'),
        filtersOpen : false,
        countries : [],
        singleCountry : false,
        showCountry : false,
        searchCountry: '',

        getAll() {
            fetch(this.api + '/all?fields=' + this.fields, {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => {this.countries = data; this.isLoading = false})
            return this.countries
        },

        getCountries() {
            if (this.selectedRegion !== 'All') {
                let showCountries = this.countries;

                showCountries = this.countries.filter((country) => {
                    return country.region === this.selectedRegion;
                });
                if (this.searchCountry) {
                    showCountries = showCountries.filter((country) => {
                        return country.name.common.toLowerCase().includes(this.searchCountry.toLowerCase())
                    });
                }
                return showCountries;
            }
            if (this.searchCountry) {
                return this.countries.filter((country) => {
                    return country.name.common.toLowerCase().includes(this.searchCountry.toLowerCase())
                });
            }
            return this.countries;
        },

        getSingleCountry(cca3) {
            return this.singleCountry = this.countries.filter((country) => {
                return country.cca3 === cca3;
            })[0]
        },

        getBorderCountriesFor(countryCodes) {
            let countryCodesArray = Object.values(countryCodes);

            return this.countries.filter((country) => {
                return countryCodesArray.includes(country.cca3);
            })
        }
    }
}