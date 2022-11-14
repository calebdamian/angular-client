export class ClHist {
  id?: number;
  descripcion: string;
  adminId: number;

  constructor(descripcion: string, adminId: number) {
    this.descripcion = descripcion;
    this.adminId = adminId;
  }
}
