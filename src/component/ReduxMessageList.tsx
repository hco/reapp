import { useEffect } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { Message } from '../domain/Message';
import { fetchMessages } from '../redux/actions';
import { ApplicationState } from '../redux/ApplicationState';
import { MessageList } from './MessageList';
import useInterval from '@rooks/use-interval';

interface Props {
  messages: Message[];
  fetchMessages: () => any;
}

const ReduxMessageListComponent = ({ messages, fetchMessages }: Props) => {
  useEffect(() => {
    fetchMessages();
  }, []);
  useInterval(fetchMessages, 1500, true);

  return <MessageList messages={messages.sort((a, b) => a.date - b.date)} />;
};

const mapStateToProps = (state: ApplicationState) => ({
  messages: Object.values(state.messages)
});

const mapDispatchToProps = {
  fetchMessages
};

export const ReduxMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxMessageListComponent);
