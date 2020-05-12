import store from '../../../redux/store';
import { addError } from '../../../redux/actions';

export default function handleError(error) {
  console.log('TODO: handle error', error);
  store.dispatch(addError(error));
  return null;
}