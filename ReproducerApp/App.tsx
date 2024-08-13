/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {PanResponder, Pressable, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const callback = useCallback(
    () => Boolean(console.log('PanResponder Callback Triggered')),
    [],
  );

  const [panResponder] = useState(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: callback,
      onStartShouldSetPanResponderCapture: callback,
    }),
  );

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', flex: 1}}
      {...panResponder.panHandlers}>
      <Pressable
        accessible={true}
        onPress={() => console.log('ON PRESS TRIGGERED')}>
        <Text>Button</Text>
      </Pressable>
      <Text>Not a button</Text>
    </View>
  );
}

export default App;
