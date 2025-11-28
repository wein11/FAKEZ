const beatsData = require('../data/beats.json');

exports.getAllBeats = (req, res) => {
    let beats = beatsData;
    const { category } = req.query;
    if (category) {
        beats = beats.filter(b => b.category.toLowerCase() === category.toLowerCase());
    }
    res.json(beats);
};

exports.getBeatById = (req, res) => {
    const beat = beatsData.find(b => b.id === req.params.id);
    if (beat) {
        res.json(beat);
    } else {
        res.status(404).json({ message: 'Beat not found' });
    }
};
