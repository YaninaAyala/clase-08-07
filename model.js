import jsonfile from "jsonfile";
const PATH = "./data.json";

const db = jsonfile.readFileSync(PATH);

// ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ COMPLETAR SOLO ESTA FUNCIÓN ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

function obtenerProvinciasSegunMeridiano(meridiano) {
  const provincias = db.provincias;
  const resultado = provincias.filter((prov) => {
    const longitud = Math.abs(Math.trunc(prov.centroide.lon));
    if (longitud == meridiano) {
      return prov;
    }
  });
  return resultado;
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ COMPLETAR SOLO ESTA FUNCIÓN ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

export default obtenerProvinciasSegunMeridiano;
