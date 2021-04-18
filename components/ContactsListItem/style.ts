import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({



container: {
flexDirection: 'row',
width: "100%",
justifyContent: 'space-between',
padding: 10,
backgroundColor: 'white'
},

lefContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
},

midContainer: {
justifyContent: 'space-around',
flexDirection: 'column'
},

avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 60
},
userName: {
    fontWeight: 'bold',
    fontSize: 16,
},
status: {
    fontSize: 14,
    color: 'gray'
},
});

export default styles;