// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: "Title is required"
    },
    date: {
        type: Date,
        default: Date.now,
        required: "Date is required"
    },
    url: {
        type: String,
        required: true,
        required: "URL is required",
        unique: true
    }
});

// Create the Model
var Article = mongoose.model('Article', ArticleSchema);

// Export it for use elsewhere
module.exports = Article;