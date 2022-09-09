import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 10,
    paddingTop: 15,

    marginBottom: -8,
  },
  imageContainer: {
    width: width / 2.4,
    height: height / (2.4 * 2),
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryTitle: {
    marginTop: 5,
  },
});

export default styles;
