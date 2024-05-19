import { Text, View } from "react-native"
import tw from 'twrnc'

export default () => {
    return (
        <View style={tw`bg-blue-100 bg-opacity-40`}>
            <Text style={tw`text-[3rem] font-bold p-2 py-20 text-center text-green-800`}>
                Say Your Thanks To Daddy
            </Text>
        </View>
    )
}