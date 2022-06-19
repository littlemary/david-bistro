module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },
    pug: {
        pretty: false,
        data: {
            menu: require('../data/menu-categories.json'),
            category: require('../data/single-category.json')
        }
    },
    webpack: {
        mode: "development"
        //mode: "production"
    },
    imagemin: {
        verbose: true
    }
}