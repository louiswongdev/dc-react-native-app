import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

function SectionScreen({ navigation }) {
  return (
    <Container>
      <Text>Section Screenssss</Text>
      <Button
        title="Close"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Container>
  );
}

SectionScreen.navigationOptions = {
  headerShown: false,
};

export default SectionScreen;
