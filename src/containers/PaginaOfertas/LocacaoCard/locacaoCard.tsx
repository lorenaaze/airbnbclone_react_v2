import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row } from 'react-bootstrap';
import backgroundTheme from '../../../assets/sem_image.png';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import style from './locacaoCard';
import { Link } from 'react-router-dom';

interface CardProps {
    key : string;
   locacao_nome: string;
    uf: string,
    localidade: string,
    bairro: string,
    logradouro: string,
    preco: number,
    capacidade: number,
        phone: string,
    urlImage: string | null;
    /*children: JSX.Element | JSX.Element[];*/
}

function LocacaoCard( {key, locacao_nome, uf, localidade, bairro, logradouro, preco, capacidade, phone, urlImage} : CardProps) {
  return (
      <>
        <Card>
          <Row xs={1} md={2} className="g-1">
            <Card.Img  style={{ width: '300px' }} src={ urlImage || backgroundTheme} alt="Imagem do Tema" />
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
      </>
  );
}

export default LocacaoCard;
