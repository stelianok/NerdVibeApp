import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    paddingTop: 5,
    paddingLeft: 28,
    flex: 0.71,
    color: '#000',
    textAlign: 'right',
  },
  buttonContainer: {
    marginLeft: 15,
    flex: 0.29,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 100,
    marginHorizontal: 5,
    marginVertical: 15,
    padding: 8,
  },
});

export default styles;
