import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 2,
  },
  logo: {
    paddingTop: 5,
    paddingLeft: 28,
    flex: 0.6,
    color: '#000',
    textAlign: 'right',
  },
  buttonContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 8,
  },
});

export default styles;
