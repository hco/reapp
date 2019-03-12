import { connect } from 'react-redux';
import { addMessage } from '../redux/actions';
import { MessageEntry } from './MessageEntry';

const mapDispatchToProps = {
  onSubmit: (event: any) => {
    // TODO Das ist halt schon Mist so.
    // Irgendwas muss hier refactored werden, bin aber noch unschlüssig, was genau.
    return addMessage(event.message, 'Elmarrr');
  }
};

export const ReduxMessageEntry = connect(
  null,
  mapDispatchToProps
)(MessageEntry);
