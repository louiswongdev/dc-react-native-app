import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TouchableOpacity, StatusBar, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  flex: 1;
  /* justify-content: center;
  align-items: center;
  background: grey; */
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 17px;
  color: white;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  top: 40px;
  left: 20px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  margin-left: 5px;
  text-transform: uppercase;
`;

function SectionScreen({ navigation }) {
  const section = navigation.getParam('section');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);

    return () => {
      StatusBar.setBarStyle('dark-content', true);
    };
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={section.image} />
        <Wrapper>
          <Logo source={section.logo} />
          <Subtitle>{section.subtitle}</Subtitle>
        </Wrapper>
        <Title>{section.title}</Title>
        <Caption>{section.caption}</Caption>
      </Cover>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ position: 'absolute', top: 20, right: 20 }}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={36}
            color="#4775f2"
            style={{ marginTop: -2 }}
          />
        </CloseView>
      </TouchableOpacity>
    </Container>
  );
}

SectionScreen.navigationOptions = {
  headerShown: false,
};

export default SectionScreen;
