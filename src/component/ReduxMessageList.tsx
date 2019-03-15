import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from '../domain/Message';
import { fetchMessages } from '../redux/actions';
import { ApplicationState } from '../redux/ApplicationState';
import { MessageList } from './MessageList';

interface Props {
  messages: Message[];
  fetchMessages: () => any;
}

const ReduxMessageListComponent = ({ messages, fetchMessages }: Props) => {
  useEffect(() => {
    fetchMessages();
  }, []);
  return <MessageList messages={messages.sort((a, b) => a.date - b.date)} />;
};

const mapStateToProps = (state: ApplicationState) => ({
  messages: state.messages
});

const mapDispatchToProps = {
  fetchMessages
};

export const ReduxMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxMessageListComponent);
