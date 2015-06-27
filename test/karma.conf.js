module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ["browserify", "jasmine"],
        files: [
            "index.js",
            "test/index.spec.js"
        ],
        browsers: ['PhantomJS'],
        preprocessors: {
            'index.js': ['browserify'],
            'test/index.spec.js': ['browserify']
        },
        plugins: [
            require("karma-jasmine"),
            require("karma-phantomjs-launcher"),
            require("karma-browserify")
        ]
    });
};