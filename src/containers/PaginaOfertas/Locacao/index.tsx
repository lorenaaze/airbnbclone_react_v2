import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface CardProps {
    locacao_nome: string;
  title: string;
  category: string;
  urlImage: string | null;
  children: JSX.Element | JSX.Element[];
}

function Card({ locacao_nome, title, category, urlImage, children }: CardProps) {
  return (
      <>
      </>
    /*<ContainerCard>
      <>
        <CardInfor>
          <img src={urlImage ?? backgroundTheme} alt="Imagem do Tema" />
          <h6>{title}</h6>
          <p>{category}</p>
        </CardInfor>
        <CardButtons>{children}</CardButtons>
      </>
    </ContainerCard>*/
  );
}

export default Card;
