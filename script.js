document.querySelector('#go').addEventListener('click', function() {
    const adresse = document.querySelector('#recherche').value;
    const adresseUrl = 'https://api-adresse.data.gouv.fr/search/?q=' + adresse;
    fetch(adresseUrl)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const conteneurResultats = document.querySelector('#resultats');
        conteneurResultats.innerHTML = "";
        for (let element of data.features) {
          const numeroEtRue = element.properties.name;
          const codePostal = element.properties.postcode;
          const ville = element.properties.city;
          const conteneur = document.createElement('article');
          const ligne1 = document.createElement('p');
          const ligne2 = document.createElement('p');
          ligne1.innerText = numeroEtRue;
          ligne2.innerText = `${codePostal} ${ville}`;
          conteneur.append(ligne1, ligne2);
          conteneurResultats.appendChild(conteneur);
        }
      })
  });
