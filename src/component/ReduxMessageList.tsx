import { connect } from 'react-redux';
import { ApplicationState } from '../redux/ApplicationState';
import { MessageList } from './MessageList';
const mapStateToProps = (state: ApplicationState) => ({
  messages: state.messages
});
export const ReduxMessageList = connect(mapStateToProps)(MessageList);
