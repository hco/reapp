import { connect } from 'react-redux';
import { setUsername } from '../redux/actions';
import { ApplicationState } from '../redux/ApplicationState';
import { UserNameInput } from './UserNameInput';

const mapStateToProps = ({ userName }: ApplicationState) => ({
  userName
});
const mapDispatchToProps = {
  onUserNameChange: setUsername
};
export const UserNameInputRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNameInput);
