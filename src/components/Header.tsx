import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';

export const Header = () => (
  <Menu attached={true} inverted={true} borderless={true} size='huge' color='teal' style={{marginBottom: '1rem'}}>
    <Container>
      <Menu.Item fitted='horizontally'>
        md interpreter playground
      </Menu.Item>
    </Container>
  </Menu>
);
