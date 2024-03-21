const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');

require('dotenv').config(); // Charger les variables d'environnement

const app = express();
const port = process.env.PORT || 5000; // Utiliser le port spécifié dans le fichier .env ou le port 5000 par défaut

// Connexion à la base de données
mongoose.connect(process.env.DB_URI, {
  // Utiliser les options recommandées
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connecté à MongoDB");
})
.catch(err => {
  console.error("Erreur de connexion à MongoDB:", err.message);
  process.exit(1); // Quitter le processus avec un code d'erreur
});

app.set('view engine', 'ejs'); // Configuration du moteur de template ejs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
