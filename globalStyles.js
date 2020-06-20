import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    upContainer: {
        height: '85%',
        width: '85%',
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
    },
    body: {
        flex: 1,
        paddingBottom: 20,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 15,
    },
    question: {
        marginBottom: 30,
    },
    input: {
        fontSize: 15,
    },
    picker: {
        width: 150,
    },
    inputContainer: {
        width: 200,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
});