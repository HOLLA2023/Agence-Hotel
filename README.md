# Application de Gestion et de Vente de Chambres d'Hôtels

## Description
Cette application web permet aux hôtels de gérer leurs offres de chambres et aux agences de voyages de proposer un système de réservation en ligne via un widget personnalisable. Elle facilite la gestion des réservations, des tarifs et des commissions entre les différents acteurs du secteur.

## Fonctionnalités

### Pour les hôtels :
- Gestion des informations de l’hôtel (nom, description, localisation, services)
- Ajout, modification et suppression de chambres (type, description, photos, prix, disponibilité)
- Configuration des prix dynamiques en fonction des saisons et promotions
- Définition des règles de réservation (durée minimum/maximum, dates spécifiques, annulation)
- Visualisation des réservations effectuées et des paiements à recevoir

### Pour les agences de voyages :
- Intégration d'un widget de réservation personnalisable sur leur site web
- Accès à un tableau de bord affichant les réservations et la commission à percevoir
- Gestion des hôtels partenaires et activation/désactivation de certains établissements
- Configuration des commissions sous forme de pourcentage ou montant fixe

### Pour les clients :
- Consultation des chambres disponibles et réservation en ligne
- Accès à des filtres avancés (région, nombre d’étoiles, prix, disponibilité)
- Paiement en ligne sécurisé

## Technologies Utilisées
- **Backend** : NestJS, Node.js
- **Frontend** : Vue.js
- **Base de données** : PostgreSQL
- **API** : RESTful
- **Outils** : Git, Docker (optionnel)

## Installation et Lancement

### Prérequis
- Node.js installé sur votre machine
- PostgreSQL configuré
- Git pour la gestion du code source

### Installation
```bash
# Cloner le dépôt
git clone https://github.com/votre-repo/application-hotel.git
cd application-hotel

# Installer les dépendances backend
cd backend
npm install

# Installer les dépendances frontend
cd ../frontend
npm install
```

### Configuration de la base de données
Configurer les informations de connexion dans le fichier `.env` du backend :
```env
DATABASE_URL=postgresql://user:password@localhost:5432/hotel_db
```

### Lancement de l’application
```bash
# Lancer le backend
cd backend
npm run start

# Lancer le frontend
cd ../frontend
npm run dev
```

## Contribution
Les contributions sont les bienvenues ! Pour toute suggestion ou correction, veuillez ouvrir une *issue* ou soumettre une *pull request*.

## License
Ce projet est sous licence MIT.

