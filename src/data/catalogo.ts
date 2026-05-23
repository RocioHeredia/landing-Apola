export interface ItemCatalogo {
  id: string;
  nombre: string;
  descripcion: string;
  imageSeed: number;
}

export const catalogo: ItemCatalogo[] = [
  {
    id: 'look-01',
    nombre: 'Look 01',
    descripcion: 'Conjunto de temporada',
    imageSeed: 219,
  },
  {
    id: 'look-02',
    nombre: 'Look 02',
    descripcion: 'Estilo urbano',
    imageSeed: 334,
  },
  {
    id: 'look-03',
    nombre: 'Look 03',
    descripcion: 'Esenciales del guardarropa',
    imageSeed: 429,
  },
  {
    id: 'look-04',
    nombre: 'Look 04',
    descripcion: 'Piezas versátiles',
    imageSeed: 543,
  },
  {
    id: 'look-05',
    nombre: 'Look 05',
    descripcion: 'Colección casual',
    imageSeed: 612,
  },
  {
    id: 'look-06',
    nombre: 'Look 06',
    descripcion: 'Moda contemporánea',
    imageSeed: 718,
  },
];
