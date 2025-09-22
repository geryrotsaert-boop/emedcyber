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
      id: 1,
      title: "Mots de passe forts",
      description: "Utilisez des mots de passe complexes avec au moins 12 caractères, mélangeant lettres, chiffres et symboles.",
      icon: "🔒"
    },
    {
      id: 2,
      title: "Authentification à deux facteurs",
      description: "Activez la 2FA sur tous vos comptes importants pour une sécurité renforcée.",
      icon: "📱"
    },
    {
      id: 3,
      title: "Mises à jour régulières",
      description: "Gardez vos systèmes et logiciels à jour pour corriger les vulnérabilités de sécurité.",
      icon: "🔄"
    },
    {
      id: 4,
      title: "Sauvegardes fréquentes",
      description: "Effectuez régulièrement des sauvegardes de vos données importantes sur des supports externes.",
      icon: "💾"
    },
    {
      id: 5,
      title: "Vigilance contre le phishing",
      description: "Ne cliquez jamais sur des liens suspects et vérifiez toujours l'expéditeur des emails.",
      icon: "🎣"
    },
    {
      id: 6,
      title: "Réseaux sécurisés",
      description: "Évitez les réseaux Wi-Fi publics pour les transactions sensibles ou utilisez un VPN.",
      icon: "📡"
    }
  ];

  const threats = [
    {
      id: 1,
      name: "Phishing",
      severity: "Élevée",
      description: "Technique de fraude par l'envoi de messages électroniques visant à obtenir des informations confidentielles."
    },
    {
      id: 2,
      name: "Ransomware",
      severity: "Critique",
      description: "Logiciel malveillant qui chiffre les données de la victime et demande une rançon pour les déchiffrer."
    },
    {
      id: 3,
      name: "Malware",
      severity: "Moyenne",
      description: "Logiciel conçu pour perturber, endommager ou accéder sans autorisation à un système informatique."
    },
    {
      id: 4,
      name: "Attaques DDoS",
      severity: "Élevée",
      description: "Attaque par déni de service distribué visant à rendre un service indisponible en le submergeant de trafic."
    },
    {
      id: 5,
      name: "Ingénierie sociale",
      severity: "Élevée",
      description: "Manipulation psychologique pour inciter les utilisateurs à divulguer des informations confidentielles."
    }
  ];

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % securityFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [securityFacts.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/50 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">E-MED-<span className="text-purple-400">CYBER</span></h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => handleSmoothScroll('accueil')} className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Accueil
                </button>
                <button onClick={() => handleSmoothScroll('menaces')} className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Menaces
                </button>
                <button onClick={() => handleSmoothScroll('conseils')} className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Conseils
                </button>
                <button onClick={() => handleSmoothScroll('ressources')} className="text-white hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  Ressources
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 focus:outline-none"
                aria-label="Menu de navigation"
                aria-expanded={isMenuOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/90">
              <button onClick={() => handleSmoothScroll('accueil')} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Accueil
              </button>
              <button onClick={() => handleSmoothScroll('menaces')} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Menaces
              </button>
              <button onClick={() => handleSmoothScroll('conseils')} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Conseils
              </button>
              <button onClick={() => handleSmoothScroll('ressources')} className="text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Ressources
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Protégez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">monde numérique</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              La cybersécurité n'est plus une option, mais une nécessité absolue dans notre monde hyperconnecté. 
              Découvrez comment vous protéger contre les menaces numériques croissantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Commencer la protection
              </button>
              <button onClick={() => handleSmoothScroll('conseils')} className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Security Fact Rotator */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20">
            <div className="flex items-center">
              <div className="text-purple-400 mr-4 text-2xl">🛡️</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Saviez-vous que...</h3>
                <p className="text-gray-300 text-lg">{securityFacts[currentFact]}</p>
              </div>
            </div>
            <div className="flex mt-4 space-x-2 justify-center">
              {securityFacts.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    index === currentFact ? 'bg-purple-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section id="menaces" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Menaces Cybernétiques</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprendre les principales menaces pour mieux s'en protéger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threats.map((threat) => (
              <div
                key={threat.id}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{threat.name}</h3>
                  <span className={`ml-3 px-2 py-1 rounded-full text-xs font-semibold ${
                    threat.severity === 'Critique' ? 'bg-red-600 text-white' :
                    threat.severity === 'Élevée' ? 'bg-orange-600 text-white' :
                    'bg-yellow-600 text-white'
                  }`}>
                    {threat.severity}
                  </span>
                </div>
                <p className="text-gray-300">{threat.description}</p>
                <button className="mt-4 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section id="conseils" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Conseils de Sécurité</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Adoptez ces bonnes pratiques pour renforcer votre sécurité numérique au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="ressources" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ressources & Outils</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des outils essentiels pour renforcer votre cybersécurité
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Outils Recommandés</h3>
              <div className="space-y-4">
                {[
                  { id: 1, name: "Gestionnaire de mots de passe", desc: "LastPass, 1Password, Bitwarden" },
                  { id: 2, name: "Antivirus", desc: "Bitdefender, Norton, Kaspersky" },
                  { id: 3, name: "VPN", desc: "ExpressVPN, NordVPN, ProtonVPN" },
                  { id: 4, name: "Authentification 2FA", desc: "Google Authenticator, Authy, Microsoft Authenticator" }
                ].map((tool) => (
                  <div key={tool.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-purple-400">{tool.name}</h4>
                    <p className="text-gray-300">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Formations & Certifications</h3>
              <div className="space-y-4">
                {[
                  { id: 1, name: "Certifications", desc: "CISSP, CEH, CompTIA Security+" },
                  { id: 2, name: "Plateformes d'apprentissage", desc: "Coursera, Udemy, Cybrary" },
                  { id: 3, name: "Communautés", desc: "OWASP, ISC², SANS Institute" },
                  { id: 4, name: "Veille sécurité", desc: "Krebs on Security, The Hacker News, Dark Reading" }
                ].map((resource) => (
                  <div key={resource.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                    <h4 className="text-lg font-semibold text-purple-400">{resource.name}</h4>
                    <p className="text-gray-300">{resource.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Prêt à renforcer votre sécurité ?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Commencez dès aujourd'hui à mettre en place des mesures de sécurité efficaces pour protéger vos données personnelles et professionnelles.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Commencer maintenant
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 py-12 px-4 sm:px-6 lg:px-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">E-MED-<span className="text-purple-400">CYBER</span></h3>
              <p className="text-gray-400 mb-4">
                Votre partenaire de confiance pour la cybersécurité. Nous vous aidons à naviguer en toute sécurité dans le monde numérique.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">YouTube</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Liens rapides</h4>
              <ul className="space-y-2">
                <li><button onClick={() => handleSmoothScroll('accueil')} className="text-gray-400 hover:text-purple-400 transition-colors">Accueil</button></li>
                <li><button onClick={() => handleSmoothScroll('menaces')} className="text-gray-400 hover:text-purple-400 transition-colors">Menaces</button></li>
                <li><button onClick={() => handleSmoothScroll('conseils')} className="text-gray-400 hover:text-purple-400 transition-colors">Conseils</button></li>
                <li><button onClick={() => handleSmoothScroll('ressources')} className="text-gray-400 hover:text-purple-400 transition-colors">Ressources</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@e-med-cyber.fr</li>
                <li>Téléphone: +33 1 23 45 67 89</li>
                <li>Adresse: Paris, France</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2023 E-MED-CYBER. Tous droits réservés. | Conçu avec ❤️ pour la cybersécurité
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
