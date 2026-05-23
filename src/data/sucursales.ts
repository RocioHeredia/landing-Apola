export interface Sucursal {
  id: string;
  nombre: string;
  direccion: string;
}

export const sucursales: Sucursal[] = [
  {
    id: 'cabana-19',
    nombre: 'Cabaña 19',
    direccion: 'Local 3 Rivadavia (N)',
  },
  {
    id: 'santa-lucia',
    nombre: 'Santa Lucía',
    direccion: 'Av. Libertador 1791 (E)',
  },
  {
    id: 'r-calivar',
    nombre: 'R. Calivar',
    direccion: '413 (S) Local 4 Rivadavia',
  },
];
