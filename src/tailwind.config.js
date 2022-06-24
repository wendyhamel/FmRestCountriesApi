tailwind.config = {
    theme: {
        fontFamily : {
            'sans': ['Nunito\\ Sans', 'sans-serif'],

        },
        extend: {
            colors: {
                'blue': 'hsl(209, 23%, 22%)', // Dark Mode Elements
                'blue-dark': 'hsl(207, 26%, 17%)', // Dark Mode Background
                'blue-darkest': 'hsl(200, 15%, 8%)', // Light Mode Text
                'gray': 'hsl(0, 0%, 52%)', // Light Mode Input
                'gray-light': 'hsl(0, 0%, 98%)', // Light Mode Background
                'white': 'hsl(0, 0%, 100%)', // Dark Mode Text & light Mode Elements
            },
        }
    }
}