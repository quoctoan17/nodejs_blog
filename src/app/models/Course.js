const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, require: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, require: true },
        level: { type: String },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

//add plugin
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
