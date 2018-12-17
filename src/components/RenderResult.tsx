import * as React from 'react';
import { connect } from 'react-redux';
import { render } from 'ymark';
import { AppState } from '../redux/reducer';

interface StateProps {
  html: string;
}
type Props = StateProps;

const RenderResultPresentation = (props: Props) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: props.html }} />
  );
};

const mapStateToProps = (state: AppState): StateProps => {
  const {inputMd} = state.repl;
  const html = render(inputMd);

  return {
    html,
  };
};
const mapDispatchToProps = {};

export const RenderResult = connect(mapStateToProps, mapDispatchToProps)(RenderResultPresentation);
