const db = require("../models");
const komikServices = require("../services/komikServices");

async function createKomik(req, res) {
    try {
        const komikData = req.body;

        if (req.file) {
            komikData.imageType = req.file.mimetype;
            komikData.imageName = req.file.originalname;
            komikData.imageData = req.file.buffer;
        }

        const result = await komikServices.createKomik(db, komikData);
        res.status(201).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getAllKomiks(req, res) {
    try {
        const result = await komikServices.getAllKomiks(db);
        res.status(200).json({ 
            success: true, 
            data: result 
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

