import React, {useState} from 'react';
import Home from './src/components/Home';
import {ScrollView, Text, TextInput, View, Button, Alert} from 'react-native';
import tw from 'twrnc';

const App = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
        console.log(`Username : ${username} and Password : ${password}`); // are Seen in terminal
    };

    return (
        <ScrollView>
            <Home />

            <View
                style={tw`p-4 bg-gray-100 flex flex-row gap-3 jusitfy-center items-center`}>
                <Text style={tw`text-lg text-gray-800`}>Username :</Text>
                <TextInput
                    style={tw`bg-white h-11 w-[16rem] mx-auto text-lg px-2`}
                    defaultValue={username}
                    onChangeText={newText => setUsername(newText)}
                />
            </View>
            <View style={tw`p-4 bg-gray-100 flex flex-row gap-3 items-center`}>
                <Text style={tw`text-lg text-gray-800`}>Password :</Text>
                <TextInput
                    value={password}
                    onChangeText={newText=> setPassword(newText)}
                    style={tw`bg-white h-11 w-[16rem] mx-auto text-lg px-2`}
                />
            </View>
            <View
                style={tw`max-w-full bg-white border border-gray-200 rounded-lg shadow mx-auto my-10
                        dark:bg-gray-800 dark:border-gray-700`}>
                <Button title="Submit" onPress={handleClick} />
            </View>
        </ScrollView>
    );
};

export default App;
