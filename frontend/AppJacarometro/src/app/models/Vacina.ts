export class Vacina {

    constructor() {
        this.id = 0;
        this.nome = '';
        this.periodoDose = 0;
        this.tipoIntervalo = '';
    }

    id!: number;
    nome: string| undefined;
    periodoDose: number| undefined;
    tipoIntervalo: string| undefined;
}
