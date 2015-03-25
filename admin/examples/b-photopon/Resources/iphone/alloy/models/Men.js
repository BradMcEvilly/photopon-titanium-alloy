exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            title: "TEXT"
        },
        adapter: {
            type: "json",
            url: "http://www.panacea-soft.com/beautician/index.php/rest/items/get/categoryId/1"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("men", exports.definition, []);

collection = Alloy.C("men", exports.definition, model);

exports.Model = model;

exports.Collection = collection;