import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentFact, setCurrentFact] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const securityFacts = [
    "90% des cyberattaques pourraient être évitées avec une formation adéquate des employés.",
    "Un ransomware attaque une entreprise toutes les 11 secondes dans le monde.",
    "Les mots de passe faibles sont responsables de 80% des violations de données.",
    "Le phishing représente plus de 90% des attaques informatiques réussies.",
    "Le coût moyen d'une violation de données est de 4,35 millions de dollars en 2023."
  ];

  const tips = [
    {
      title: "Mots de passe forts",
      description: "Utilisez des mots de passe complexes avec au moins 12 caractères, mélangeant lettres, chiffres et symboles.",
      icon: "🔒"
    },
    {
      title
