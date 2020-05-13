import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
// import { Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const initalAnimation = new Animated.Value(1);
const initialOpacity = new Animated.Value(1);

export default function HomeScreen() {
  const [scale, setScale] = useState(initalAnimation);
  const [opacity, setOpacity] = useState(initialOpacity);
  const action = useSelector(state => state.action);
  const dispatch = useDispatch();
  const openMenu = () => dispatch({ type: 'OPEN_MENU' });

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true);
    toggleMenu();
  }, [action]);

  const toggleMenu = () => {
    if (action === 'openMenu') {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5,
      }).start();

      StatusBar.setBarStyle('light-content', true);
    }

    if (action === 'closeMenu') {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in(),
      }).start();
      Animated.spring(opacity, {
        toValue: 1,
      }).start();

      StatusBar.setBarStyle('dark-content', true);
    }
  };

  return (
    <RootView>
      <Menu />
      <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <TouchableOpacity
                onPress={openMenu}
                style={{ position: 'absolute', top: 0, left: 20 }}
              >
                <Avatar source={require('../assets/avatar.jpg')} />
              </TouchableOpacity>
              <Title>Welcome back, </Title>
              <Name>Louis</Name>
              <NotificationIcon
                style={{ position: 'absolute', right: 20, top: 5 }}
              />
            </TitleBar>
            <ScrollView
              style={{
                flexDirection: 'row',
                padding: 20,
                paddingLeft: 12,
                paddingTop: 30,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {logos.map((logo, i) => (
                <Logo key={i} image={logo.image} text={logo.text} />
              ))}
            </ScrollView>
            <Subtitle>Continue Learning</Subtitle>
            <ScrollView
              horizontal={true}
              style={{ paddingBottom: 30 }}
              showsHorizontalScrollIndicator={false}
            >
              {cards.map((card, i) => (
                <Card
                  key={i}
                  title="Styled Components"
                  image={card.image}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, i) => (
              <Course
                key={i}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
}

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Designers',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Props and Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'Prototype in InVision Studio',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design and interactive prototype',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and Code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption:
      'Complete guide to designing a site using a collaborative design tool',
  },
];
