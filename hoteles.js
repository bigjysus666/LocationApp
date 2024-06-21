// Importamos la lista de ciudades
import { ciudadesYPaises } from './cities.json';

// Generar datos de hoteles de ejemplo para cada ciudad
const generarHoteles = (ciudad, pais) => {
    return [
        {
            nombre: `Hotel ${ciudad} Centro`,
            direccion: `Dirección central en ${ciudad}`,
            estrellas: Math.floor(Math.random() * 5) + 1, // Estrellas aleatorias entre 1 y 5
            precioPorNoche: Math.floor(Math.random() * 500) + 50, // Precio aleatorio entre 50 y 550
            imagen: `https://example.com/hotel-${ciudad.toLowerCase().replace(/ /g, '-')}-centro.jpg`
        },
        {
            nombre: `Hotel ${ciudad} Plaza`,
            direccion: `Dirección plaza en ${ciudad}`,
            estrellas: Math.floor(Math.random() * 5) + 1,
            precioPorNoche: Math.floor(Math.random() * 500) + 50,
            imagen: `https://example.com/hotel-${ciudad.toLowerCase().replace(/ /g, '-')}-plaza.jpg`
        }
    ];
};

// Crear el objeto de hoteles basado en la lista de ciudades y países
const hoteles = ciudadesYPaises.map(entry => ({
    ciudad: entry.ciudad,
    pais: entry.pais,
    hoteles: generarHoteles(entry.ciudad, entry.pais)
}));

export { hoteles };
