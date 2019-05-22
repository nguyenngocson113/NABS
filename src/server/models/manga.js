const mongoose = require('mongoose');

const mangaSchema = mongoose.Schema({
    code: Number,
    data: {
        mid: Number,
        oid: String,
        name: String,
        author: String,
        rank: Number,
        msid: Number,
        completed: Boolean,
        last_updateupdate: Date,
        removed: {type: Boolean, default: false},
        direction: Number,
        total_chapters: Number,
        description: String,
        categories: Array,
        chapters: [
            {
                cid: Number,
                oid: String,
                order: Number,
                name: String,
                updatedAt: Date
            }
        ],
        thumbnail: String,
        cover: String,
        artworks: Array,
        alias: Array,
        characters: [
            {
                name: String,
                oid: String,
                thumbnail: String
            }
        ],
        authors: [
            {
                oid: String,
                name: String,
                thumbnail: String,
                role: String
            }
        ],
        rich_categories: [
            {
                oid: String,
                name: String
            }
        ],
        extra: {
            'English Publisher': String,
            'Original Publisher': String,
            Published: Date,
            Serialization: String
        }
    }
});

const Manga = mongoose.model('Manga', mangaSchema);

module.exports = Manga;