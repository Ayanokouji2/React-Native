import React, {useState} from 'react';
import Home from './src/components/Home';
import {ScrollView, Text, TextInput, View, Button, Alert} from 'react-native';
import tw from 'twrnc';
import Notification from './src/utility/Notification';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        console.log(`Username : ${username} and Password : ${password}`); // are Seen in terminal
    };

    return (
        <ScrollView>
            <Home />

            <Notification />
            <View style={tw`p-4 bg-gray-100  gap-3 items-center`}>
                <Text style={tw`text-lg text-gray-800`}>Message :</Text>
                <TextInput
                    value={password}
                    onChangeText={newText=> setPassword(newText)}
                    style={tw`bg-white max-h-11 w-full mx-auto text-lg px-2`}
                />
            <Button  title="Send" onPress={handleClick} />
            </View>
            {/* <View
                style={tw`max-w-full bg-white border border-gray-200 rounded-lg shadow mx-auto my-10
                        dark:bg-gray-800 dark:border-gray-700`}> */}
            {/* </View> */}
        </ScrollView>
    );
};

export default App;
