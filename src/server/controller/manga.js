const Manga = require('../models/manga');

exports.getsManga = (req, res) => {
    /** continue apply pagination */
    Manga.find({'data.removed': false})
    .then((list) => {
        res.send(list);
    })
    .catch((error) => {
        res.send('Fail');
    });
};

exports.getManga = (req, res) => {
    Manga.findById()
    .then((manga) => {
        res.send(manga);
    })
    .catch((error) => {
        res.send('Fail');
    });
};

exports.removeItem = (req, res) => {
    const mangaId = req.query.id;
    Manga.findByIdAndUpdate(mangaId, {'data.removed': true})
    .then((product) => {
        res.send('Succces');
    })
    .catch((error) => {
        res.send('Fail');
    });
};

exports.updateItem = (req, res) => {
    const mangaId = req.query.id;
    const data = req.body;
    Manga.findByIdAndUpdate(mangaId, data)
    .then((item) => {
        res.send('Succces');
    })
    .catch((error) => {
        res.send('Fail');
    });
};

exports.createItem = (req, res) => {
    const data = req.body;
    const newItem = new Manga(data);
    newItem.save((error) => {
        if (error) {
            res.send('Fail');
        }
        res.send('Succces');
    });
};