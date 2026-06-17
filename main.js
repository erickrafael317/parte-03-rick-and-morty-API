import { buscarPersonagens } from "./api.js";
import { renderizarPersonagens } from "./util.js";

async function iniciarApp() {
    const personagens = await buscarPersonagens();
    renderizarPersonagens(personagens.results);
}

iniciarApp();