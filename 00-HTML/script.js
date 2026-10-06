// const searchInput = document.getElementById('empleos-search-input')

// searchInput.addEventListener('input', function (event) {
//     console.log("Busqueda:", searchInput.value)
// })
// const searchForm = document.getElementById('empleos-search-form');

// searchForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log("Busqueda enviada:", searchInput.value)
// })



const mensaje = document.querySelector("#filter-selected-value");
const filterLocation = document.getElementById("filter-location");

filterLocation.addEventListener("change", function (event) {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterLocation.value;
  

  if (selectedValue) {
    mensaje.textContent = `Ubicación seleccionada: ${selectedValue}`;
  }else{
    mensaje.textContent = ""
  }

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;
    const iShown = selectedValue === "" || modalidad === selectedValue;
    job.classList.toggle("is-hidden", !iShown);
  })

})

const container = document.querySelector(".jobs-listings");
const loading =  document.querySelector("#jobs-loading")

fetch("./data.json") /* El fecth es asincrono */
  .then((response) => {
    return response.json()
  })
  .then((jobs) =>{

    // if(loading) loading.remove();
  

    // if(jobs.length === 0){
    //   container.innerHTML = "<p>No hay empleoas disponibles por ahora</p>"
    //   return
    // }


    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "job-listing-card";
      
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `
        <div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>
        `
        container.appendChild(article);
        
      });

    

  })
// .catch((error) => {
//         if (loading) loading.textContent = "Error al cargar los empleos"
//         console.log(error)
//       })  


