window.countriesJS = function() {
    return {
        darkMode : Alpine.$persist(true),
        filteredCountries : {},
        regions : ['all', 'africa', 'america', 'asia', 'europe', 'oceania'],
        searchInput : '',
        filtersOpen : false,
        selectedRegion: Alpine.$persist('Filter by Region'),
        showCountry : false,

        all() {
            fetch('https://restcountries.com/v3.1/all?fields=cca2,name,flags,capital,population,region,subregion,currencies,borders,languages,tld', {cache: 'no-cache'})
                .then(response => response.json())
                .then(data => this.filteredCountries = data)
            return this.filteredCountries
        },

        result : {},
        getEachItem(object) {
            object.forEach(item => {
                this.searchItem(item)
            })

        },

        searchItem(item) {
            Object.keys(item).forEach(key => {
                if (typeof item[key] === "object") {
                    this.searchItem(item[key])
                }
                if (typeof item[key] === "string") {
                    this.result.push(item.id)
                }
            })
        }

    }
}