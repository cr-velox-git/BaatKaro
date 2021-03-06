import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({
    container: {
        
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end'

    },

    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',

    },
    textInput: {
        flex: 1,
        marginHorizontal: 10,
        
    },

    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
});

export default styles;