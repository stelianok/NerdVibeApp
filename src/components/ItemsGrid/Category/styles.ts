import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    color: '#000',
    marginTop: 5,
  },
});

export default styles;
