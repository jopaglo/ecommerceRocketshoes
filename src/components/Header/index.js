import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize} {cartSize === 1 ? 'item' : 'itens'}
          </span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);

/* atraves do connect eu recebo parametros e funcoes para acessar as informacoes 
do reducer. O primeiro parametro é uma funcao, que retorna o estado inteiro do reducer
 e eu monto os itens que eu quero usar. (cart é o nome do reducer que vou acessar) */
