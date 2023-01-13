document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData();
    const res = await fetch("https://api.gael.cloud/general/public/sismos");
    const data = await res.json();
    // console.log(data);
    addInformation(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const addInformation = (data) => {
  const paste = document.getElementById("paste");
  const copy = document.getElementById("copy").content;
  const fragment = document.createDocumentFragment();
  data.forEach((item) => {
    console.log(item);
    const clone = copy.cloneNode(true);
    clone.getElementById("fecha").textContent = item.Fecha;
    clone.getElementById("RefGeo").textContent = item.RefGeografica;
    clone.getElementById("profundidad").textContent = item.Profundidad;
    clone.getElementById("Magnitud").textContent = item.Magnitud;
    fragment.appendChild(clone);
  });
  paste.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.getElementById("loading");
  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};

/* 
Como conclusión aprendí bastante con el proyecto a como realizar fetch, async, await. En esta ocasión consumí una api publica de sismos en Chile que viene con formato json, además el continuo aprendizaje de como implementar bootstrap en su versión 5.3.0, manejo de filas y columnas por medio de cartas para ingresar la información de la api a mi sitio web, como referencia y metodo de aprendizaje utilice el material entregado por Bluuweb para realizar el proyecto

Aspecto a aprender: Las imagenes son estaticas, mediante la api la que estoy consumiendo no contiene las imagenes referente a las ciudades afectadas por lo cual decidí implementar una imagen estatica.

Dev: Carlos Agüero Marquizani.
Fines: Aprendizaje.
*/
