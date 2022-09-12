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

  infoContainer: {
    flex: 1,
    flexDirection: 'row',

    marginBottom: 15,
    paddingVertical: 5,
  },
  infoTextContainer: {
    flex: 1,
    width: 150,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  itemName: {
    color: '#000',
  },

  priceContainer: {
    flexDirection: 'row',
  },
  priceTextOnSale: {
    color: '#03B252',
    fontWeight: 'bold',
  },
  priceTextOnSaleDisabled: {
    color: 'gray',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',

    marginRight: 5,
  },
  PriceText: {
    color: '#000',
    fontWeight: 'bold',
  },
  favoriteButton: {
    borderRadius: 100,

    justifyContent: 'center',

    padding: 5,

    marginRight: 10,
  },
});

export default styles;
