const Metro = require('../models/Metro');

exports.createMetro = async (req, res) => {
    try {
        const newMetro = new Metro(req.body);
        await newMetro.save();
        res.status(200).json(newMetro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllMetros = async (req, res) => {
    try {
        const Metros = await Metro.find();
        res.status(200).json(Metros);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getMetroById = async (req, res) => {
    try {
        const Metro = await Metro.findById(req.params.id);
        if (!Metro) {
            return res.status(404).json({ message: 'Metro not found' });
        }
        res.json(Metro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateMetro = async (req, res) => {
    try {
        const updatedMetro = await Metro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMetro) {
            return res.status(404).json({ message: 'Metro not found' });
        }
        res.json(updatedMetro);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteMetro = async (req, res) => {
    try {
        const deletedMetro = await Metro.findByIdAndDelete(req.params.id);
        if (!deletedMetro) {
            return res.status(404).json({ message: 'Metro not found' });
        }
        res.json({ message: 'Metro deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};