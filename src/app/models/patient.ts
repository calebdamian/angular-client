import { Admin } from './admin';

export class Patient {
  id?: number;

  admin?: Admin | undefined;

  nombres: string;

  apellidos: string;

  email: string;

  fecha_nac: Date;

  fecha_creacion?: string;

  fecha_modificacion?: string;

  num_contacto: string;

  num_id: string;

  constructor(
    nombres: string,
    apellidos: string,
    email: string,
    num_contacto: string,
    fecha_nac: Date,
    num_id: string
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.num_contacto = num_contacto;
    this.fecha_nac = fecha_nac;
    this.num_id = num_id;
  }
}
