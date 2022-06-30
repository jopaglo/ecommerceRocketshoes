import produce from 'immer';
import { toast } from 'react-toastify';

export default function cart(state = [], action) {
  switch (action.type) {
    // aqui vou separar todos os tipos de actions
    case '@cart/ADD_TO_CART_SUCCESS':
      return produce(state, (draft) => {
        const { product } = action;
        draft.push(product);
        toast.info('Produto adicionado ao seu carrinho sucesso!');
      });

    case '@cart/REMOVE_ITEM_CART_SUCCESS':
      return produce(state, (draft) => {
        const { id } = action;
        const productIndex = draft.findIndex(
          (itemWanted) => itemWanted.id === id
        );
        draft.splice(productIndex, 1);
        toast.info('Produto removido do seu carrinhocom sucesso!');
      });

    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, (draft) => {
        const { id, amount } = action;

        const productIndex = draft.findIndex(
          (itemWanted) => itemWanted.id === id
        );

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(amount);
        }
      });
    }

    default:
      return state;
  }
}
