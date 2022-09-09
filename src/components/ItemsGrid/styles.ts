import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  title: {
    color: '#000',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 4,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
