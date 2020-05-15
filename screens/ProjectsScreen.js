import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

function ProjectsScreen({ navigation }) {
  return (
    <Container>
      <Text>Projects Screen</Text>
    </Container>
  );
}

ProjectsScreen.navigationOptions = {
  headerShown: false,
};

export default ProjectsScreen;
