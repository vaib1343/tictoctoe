import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {initialValue} from './Constant';
import ListItem from './components/ListItem/ListItem';
import Snackbar from 'react-native-snackbar';

const App = () => {
  const [data, setData] = useState([...initialValue]);
  const [step, setStep] = useState(1);
  const [winner, setWinner] = useState('');

  const resetGame = () => {
    setData(initialValue);
    setStep(1);
    setWinner('');
  };

  const checkWinner = (data: string[]) => {
    let flag = '';
    if (data[0] !== 'nothing' && data[0] === data[1] && data[1] === data[2]) {
      flag = data[0];
    } else if (
      data[3] !== 'nothing' &&
      data[3] === data[4] &&
      data[4] === data[5]
    ) {
      flag = data[3];
    } else if (
      data[6] !== 'nothing' &&
      data[6] === data[7] &&
      data[7] === data[8]
    ) {
      flag = data[6];
    } else if (
      data[0] !== 'nothing' &&
      data[0] === data[3] &&
      data[3] === data[6]
    ) {
      flag = data[0];
    } else if (
      data[1] !== 'nothing' &&
      data[1] === data[4] &&
      data[4] === data[7]
    ) {
      flag = data[1];
    } else if (
      data[2] !== 'nothing' &&
      data[2] === data[5] &&
      data[5] === data[8]
    ) {
      flag = data[2];
    } else if (
      data[0] !== 'nothing' &&
      data[0] === data[4] &&
      data[4] === data[8]
    ) {
      flag = data[0];
    } else if (
      data[2] !== 'nothing' &&
      data[2] === data[4] &&
      data[4] === data[6]
    ) {
      flag = data[2];
    }

    if (flag) {
      setWinner(flag === 'cross' ? 'X' : '0');
      Snackbar.show({
        text: `Player ${flag === 'cross' ? 'X' : '0'} won!!! 🚀`,
        backgroundColor: '#7cb305',
      });
    }
  };

  const onIconPress = (index: number) => {
    const newData = [...data];
    if (step % 2 && newData[index] === 'nothing') {
      newData[index] = 'zero';
    } else if (newData[index] === 'nothing') {
      newData[index] = 'cross';
    }
    if (step <= 9) {
      setStep(preState => preState + 1);
    } else {
      setData(initialValue);
    }
    setData(newData);
    checkWinner(newData);
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#515151" />
      <View
        style={[
          styles.messageBox,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: winner ? '#7cb305' : '#fadb14',
          },
        ]}>
        <Text style={styles.messageTxt}>
          {winner
            ? `Player ${winner} win 🚀`
            : `Player ${step % 2 === 0 ? 'X' : '0'}'s Turn`}
        </Text>
      </View>
      <View>
        <FlatList
          data={data}
          numColumns={3}
          keyExtractor={(item, index) => '' + index}
          renderItem={({item, index}) => {
            return (
              <Pressable
                style={styles.iconContainer}
                onPress={() => onIconPress(index)}
                disabled={!!winner}>
                <ListItem value={item} />
              </Pressable>
            );
          }}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.reloadBtn} onPress={() => resetGame()}>
          <Text style={styles.btnTxt}>Reload game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    margin: 8,
    paddingVertical: 15,
    borderRadius: 6,
    elevation: 10,
  },
  messageTxt: {
    fontWeight: '800',
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
  },
  reloadBtn: {
    margin: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#a628dc',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});

export default App;
