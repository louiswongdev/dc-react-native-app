import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;

const Avatar = () => {
  const [photo, setPhoto] = useState(
    'https://p138.p2.n0.cdn.getcloudapp.com/items/BluZvEOm/avatar-default.jpg?v=4aadcdbdffe209bbd523530a75351afd',
  );

  const dispatch = useDispatch();

  const updateName = name => dispatch({ type: 'UPDATE_NAME', payload: name });

  useEffect(() => {
    fetch('https://randomuser.me/api/?gender=male')
      .then(res => res.json())
      .then(res => {
        setPhoto(res.results[0].picture.thumbnail);
        updateName(res.results[0].name.first);
      });
  }, []);

  return <Image source={{ uri: photo }} />;
};

export default Avatar;
