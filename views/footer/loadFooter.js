// Sélectionner l'élément où le footer sera injecté
const footerPlaceholder = document.getElementById('footer-placeholder');

// Charger le contenu de footer.html
fetch('../footer/footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text(); // Récupérer le contenu HTML en texte
  })
  .then(footerHTML => {
    // Injecter le contenu dans le placeholder
    footerPlaceholder.innerHTML = footerHTML;
  })
  .catch(error => {
    console.error('Erreur lors du chargement du footer:', error);
  });
