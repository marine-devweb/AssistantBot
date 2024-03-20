const mongoose = require('mongoose');

const profilSchema = new mongoose.Schema({
    name: String,
    job: String,
    description: String,
    experience: String,
    instagram: String,
    linkedin: String,
});

module.exports = mongoose.model("Profil", profilSchema);
