const BASE_URL = 'https://rickandmortyapi.com/api';

export async function buscarPersonagens() {
    try {
        const response = await fetch(`${BASE_URL}/character`);
        if (!response.ok) throw new Error('Erro ao buscar dados da API');
        const data = await response.json();
        return data; // Retorna o objeto JSON contendo 'info' e 'results'
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}