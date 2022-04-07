
        const urlApi = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1a2d76ef3722a5d6a6e82ba8b07b7c43&hash=9dad4c9589207561f40ef6617677e794';
        const container = document.querySelector('.container');
        let contentHTML = '';
 
        fetch(urlApi) 
        .then( res =>  res.json())
        .then(data => {
            console.log(data.data.results);
            for(const hero of data.data.results){
               let urlHero = hero.urls[0].url;
               contentHTML+= `
            <div class="card">
               <a href="${urlHero}" target="_blank">
                   <img class="img-thumbnail" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}">
               </a>
               <h3 class="title">${hero.name}</h3>
           </div>`;
            }
            container.innerHTML = contentHTML;
        })
        .catch(err=>console.log(err));
    