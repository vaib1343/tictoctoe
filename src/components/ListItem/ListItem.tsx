import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icons from '../Icon/Icon';

const ListItem = (props: ListItemProps): JSX.Element => {
  const {value} = props;
  return (
    <View style={styles.container}>
      {value === 'nothing' && <Icons name="pen" />}
      {value === 'zero' && <Icons name="circle" />}
      {value === 'cross' && <Icons name="cross" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ListItem;
