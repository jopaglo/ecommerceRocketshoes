import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 5px;

  footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      text-transform: uppercase;
      padding: 12px 20px;
      transition: all ease 0.3s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #888;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 5px;
      width: 60px;
      text-align: center;
    }

    button {
      background: none;
      border: 0;
      outline: 0;
      padding: 5px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline; /* alinha de acordo com a linha de baixo do texto */

  span {
    color: #888;
    font-weight: bold;
  }

  strong {
    font-size: 25px;
    margin-left: 5px;
  }
`;
