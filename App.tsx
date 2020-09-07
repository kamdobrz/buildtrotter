import React from 'react';
import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import analytics from '@react-native-firebase/analytics';

const App = () => {
    return (
        <>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView>
                <View>
                    <Button
                        title={'Add To Basket'}
                        onPress={() =>
                            analytics().logEvent('basket', {
                                id: 3745092,
                                item: 'mens grey t-shirt',
                                description: ['round neck', 'long sleeved'],
                                size: 'L'
                            })
                        }
                    />
                </View>
            </SafeAreaView>
        </>
    );
};

export default App;
