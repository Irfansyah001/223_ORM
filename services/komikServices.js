async function createKomik(database, komikData) {
    const { title, description, author, imageType, imageName, imageData } = komikData;

    if (!title || !description || !author) {
        throw new Error("Title, description, and author are required fields.");
    }

    const newKomik = await database.Komik.create({
        title,
        description,
        author,
        imageType: imageType || null,
        imageName: imageName || null,
        imageData: imageData || null
    });

    return newKomik;

}

async function getAllKomiks(database) {
    const komiks = await database.Komik.findAll();

    return komiks.map(k => {
        if (k.imageData) {
            k.imageData = k.imageData.toString('base64');
        }
        return k;
    });
}

async function getKomikById(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) throw new Error("Komik not found");

    if (komik.imageData) {
        komik.imageData = komik.imageData.toString('base64');
    }

    return komik;
}

async function updateKomik(database, id, komikData) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error(`Komik in ID ${id} not found`);
    }

    await komik.update(komikData);
    return komik;
}

async function deleteKomik(database, id) {
    const komik = await database.Komik.findByPk(id);
    if (!komik) {
        throw new Error(`Komik in ID ${id} not found`);
    }

    await komik.destroy();
    return { message: `Komik with ID ${id} has been deleted.` };
}

module.exports = {
    createKomik,
    getAllKomiks,
    getKomikById,
    updateKomik,
    deleteKomik
};