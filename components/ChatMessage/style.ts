import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import Colors from '../../constants/Colors';




const style = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%'
    },

    messageBox: {

        borderRadius: 7,
        backgroundColor: 'gray',
        marginRight: 60,
        padding: 10,
    },
    name: {
        color: Colors.light.tint,
        fontWeight: "bold",
        marginBottom: 5,
    },
    message: {

    },
    time: {
        alignSelf: 'flex-end',
        color: 'gray',

    },

});

export default style;