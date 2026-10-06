// const searchInput = document.getElementById('empleos-search-input')

// searchInput.addEventListener('input', function (event) {
//     console.log("Busqueda:", searchInput.value)
// })
// const searchForm = document.getElementById('empleos-search-form');

// searchForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     console.log("Busqueda enviada:", searchInput.value)
// })

const jobListingSection = document.querySelector(".jobs-listings");

jobListingSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "Aplicado";
    element.classList.add("is-applied");
    element.ariaDisabled = true;
  }
});

const jobs = document.querySelectorAll(".job-listing-card");
const mensaje = document.querySelector("#filter-selected-value");
const filterLocation = document.getElementById("filter-location");

filterLocation.addEventListener("change", function (event) {
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
