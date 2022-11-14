export class Patient {
  id?: number;
  nombres: string;

  apellidos: string;

  email: string;

  fecha_nac: Date;

  num_contacto: string;

  num_id: string;
  adminId: number;
  constructor(
    nombres: string,
    apellidos: string,
    email: string,
    num_contacto: string,
    fecha_nac: Date,
    num_id: string,
    adminId: number
  ) {
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.email = email;
    this.num_contacto = num_contacto;
    this.fecha_nac = fecha_nac;
    this.num_id = num_id;
    this.adminId = adminId;
  }
}
