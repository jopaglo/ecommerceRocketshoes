import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  // verificar se já existe pra nao incluir duplicado no carrinho
  const productExists = yield select((state) =>
    state.cart.find((itemWanted) => itemWanted.id === id)
  );

  // verificar se tem estoque disponível
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount; // meu estoque em logistica
  const amountCartCurrency = productExists ? productExists.amount : 0; // quantidade dentro do carrinho

  const amount = amountCartCurrency + 1; // nova quantidade a ser atualizada no carrinho

  if (amount > stockAmount) {
    toast.error('A quantidade desejada é maior do que o estoque!');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  // preciso verificar , fazer algumas análises
  if (amount < 1) {
    toast.error('A quantidade mínima é 1 unidade!');
    return;
  }

  const stock = yield call(api.get, `/stock/${id}`); // pegar dados da api
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error(
      'Não é possível adicionar mais itens, já atingimos o máximo em estoque!'
    );
    return;
  }
  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

/*
call: nao posso chamar direto uma api, entao eu uso o metodo call
put: serve pra eu disparar uma action do redux
takelastest: executa com o ultimo clique
select: eu uso para acessar informacoes dentro do estado
all - pra ouvir todos os actions
*/
