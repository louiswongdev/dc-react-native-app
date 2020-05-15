import React from 'react';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

function CoursesScreen({ navigation }) {
  return (
    <Container>
      <Text>Courses Screen</Text>
    </Container>
  );
}

CoursesScreen.navigationOptions = {
  headerShown: false,
};

export default CoursesScreen;
