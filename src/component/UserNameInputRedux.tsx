import { connect } from 'react-redux';
import { setUsername } from '../redux/actions';
import { ApplicationState } from '../redux/ApplicationState';
import { getUsername } from '../redux/reducer';
import { UserNameInput } from './UserNameInput';

const mapStateToProps = (state: ApplicationState) => ({
  userName: getUsername(state)
});
const mapDispatchToProps = {
  onUserNameChange: setUsername
};
export const UserNameInputRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNameInput);
