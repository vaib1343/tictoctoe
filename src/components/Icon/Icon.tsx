import React from 'react';
import {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconProps) => {
  switch (name) {
    case 'circle':
      return <Icon name="circle-o" size={38} color="#F7CD2E" />;

    case 'pen':
      return <Icon name="pencil" size={38} color="#8a8a8a" />;

    case 'cross':
      return <Icon name="close" size={38} color="#9c1414" />;
    default:
      break;
  }
};

export default Icons;
