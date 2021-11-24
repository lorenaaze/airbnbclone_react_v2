import { Locacao } from '../helpers/dtos';

export async function getDados() {
        const resultado = await fetch('https://airbnb-clone-desafio.herokuapp.com/api/locacao');
          const dados: Locacao[] = await resultado.json();
          return dados;
  
}

export async function getDado(_id: string){
    try { 
    const resultado = await fetch('https://airbnb-clone-desafio.herokuapp.com/api/locacao');
        if (resultado.ok) {
          const dados: Locacao[] = await resultado.json();
          return dados.find(dado => dado._id === _id);
        }
    } catch (error) {
        console.log(error);
    }
}