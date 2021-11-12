import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row } from 'react-bootstrap';
import backgroundTheme from '../../../assets/sem_image.png';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import style from './';

interface CardProps {
   locacao_nome: string;
    uf: string,
    localidade: string,
    bairro: string,
    logradouro: string,
    preco: number,
    capacidade: number,
        phone: string,
    /*urlImage: string | null;
    children: JSX.Element | JSX.Element[];*/
}

function LocacaoCard( {locacao_nome, uf, localidade, bairro, logradouro, preco, capacidade, phone} : CardProps) {
  return (
      <>
      <CardHeader>
        <Card>
          <Row xs={1} md={2} className="g-4">
            <Card.Img  style={{ width: '300px' }} src={ backgroundTheme} alt="Imagem do Tema" />
              <Card.Body>
                <Card.Text>
                <h3>{locacao_nome}</h3>
                <h6>Endereço: {logradouro}, {bairro}, {localidade}-{uf} </h6>
                <h6>R$ {preco}/noite</h6>
                <h6>Até {capacidade} pessoas</h6>
                <h6>Contato propriertário: {phone}</h6>
                </Card.Text>

            </Card.Body>
          </Row>
      </Card>
      </CardHeader>
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

export default LocacaoCard;
