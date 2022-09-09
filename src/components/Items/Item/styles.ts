import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    marginHorizontal: 5,
  },
  imageContainer: {
    width: width / 2,
    height: height / (2 * 2),

    marginBottom: 5,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 0.8,
    right: 0.8,

    borderRadius: 100,
    backgroundColor: 'blue',
  },
  infoContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  itemName: {
    color: '#000',
  },
  PriceText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
