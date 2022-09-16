import React from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from './styles';

interface IProductPictures {
  imageURL: string;
}

interface IProps {
  data: Array<IProductPictures>;
}

const { carouselContainer, imageStyle } = styles;
export default function ImageCarousel({ data }: IProps) {
  return (
    <Swiper containerStyle={carouselContainer}>
      {data.map(item => {
        return (
          <Image
            key={item.imageURL}
            source={{ uri: item.imageURL }}
            style={imageStyle}
            resizeMode={'contain'}
          />
        );
      })}
    </Swiper>
  );
}
