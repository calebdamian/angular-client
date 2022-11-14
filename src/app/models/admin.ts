import { ClHist } from './cl-hist';

export class Admin {
  id?: number;
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  nombre_usuario: string;
  historias_clinicas: ClHist;

  constructor(
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    nombre_usuario: string,
    historias_clinicas: ClHist
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.password = password;
    this.nombre_usuario = nombre_usuario;
    this.historias_clinicas = historias_clinicas;
  }
}
