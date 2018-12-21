import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Form, TextArea } from 'semantic-ui-react';
import { changeInputMd } from '../redux/modules/repl';
import { AppState } from '../redux/reducer';

const actions = { changeInputMd };

interface StateProps {
  inputMd: string;
}
type DispatchProps = typeof actions;
type Props = StateProps & DispatchProps;

const EditorPresentation = (props: Props) => (
  <Form>
    <TextArea
      value={props.inputMd}
      onChange={(e: any) => props.changeInputMd(e.target.value)}
      rows={20}
    />
  </Form>
);

const mapStateToProps = (state: AppState): StateProps => {
  return {
    inputMd: state.repl.inputMd,
  };
};
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return {
    ...bindActionCreators(actions, dispatch),
  };
};

export const Editor = connect(mapStateToProps, mapDispatchToProps)(EditorPresentation);
