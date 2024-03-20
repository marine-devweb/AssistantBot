const Profil = require('../models/profils');

exports.getData = async (req, res) => {
  try {
    const data = await Profil.find().lean();
    res.render('index', { data });
  } catch (err) {
    console.error(err);
    res.status(500).send('Erreur interne du serveur');
  }
};
