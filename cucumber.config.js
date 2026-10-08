export default {
    paths: [
        "tests/features/*.feature"
    ],

    require: [
        "tests/stepDefinitions/*.js",
        "tests/support/*.js"
    ],

    publishQuiet: true,

    format: [
        "progress",
        "html:reports/report.html"
    ]
};