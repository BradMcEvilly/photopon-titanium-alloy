exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            title: "TEXT"
        },
        adapter: {
            type: "json",
            url: "http://192.168.43.167:8888/citytour/index.php/api/categories"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("tidev", exports.definition, []);

collection = Alloy.C("tidev", exports.definition, model);

exports.Model = model;

exports.Collection = collection;