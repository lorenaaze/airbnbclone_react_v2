export interface Locacao {
    _id:string;
    locacao_nome: string,
    descricao_longa: string,
    descricao_curta: string,
    uf: string,
    localidade: string,
    bairro: string,
    logradouro: string
    complemento: string,
    cep: string,
    preco: number,
    capacidade: number,
    proprietario: {
        nome: string,
        cpf: string,
        email: string,
        phone: string,
    }
    ultimo_update: Date,
    urlImage: string
}

