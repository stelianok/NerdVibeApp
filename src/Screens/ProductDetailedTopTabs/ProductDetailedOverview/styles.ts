import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#dedede',
    marginBottom: 5,
  },
  body: {
    margin: 15,
  },
  carouselContainer: {
    margin: 5,
    marginTop: -25,
    height: height / 1.9,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  mainInfoContainer: {},
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TitleInfoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  price: {
    color: '#03B252',
    fontWeight: 'bold',
  },
  productTitle: {
    color: '#000',
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  reviewIcon: {
    marginBottom: 15,
  },
  reviewText: {
    color: '#000',
  },
});

export default styles;
