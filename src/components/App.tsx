import * as React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Editor } from './Editor';
import { Header } from './Header';
import { RenderResult } from './RenderResult';

export const App = () => (
  <div>
    <Header />
    <Container>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Editor />
          </Grid.Column>
          <Grid.Column>
            <RenderResult />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </div>
);
