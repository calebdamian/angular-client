export class Admin {
  id?: number;
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  nombre_usuario: string;

  constructor(
    nombres: string,
    apellidos: string,
    email: string,
    password: string,
    nombre_usuario: string
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.password = password;
    this.nombre_usuario = nombre_usuario;
  }
}
