import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
});

export default styles;
