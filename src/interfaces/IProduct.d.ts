interface IAvailableColors {
  colorHex: string;
}

interface ISizeOptions {
  size: string;
}

interface IImageArray {
  imageURL: string;
}

interface IProduct {
  imageArray: IImageArray[];
  name: string;
  price: number;
  isOnSale: boolean;
  discount?: number;
  rating: string;
  description?: string;
  hasColorOptions: boolean;
  availableColors?: IAvailableColors[];
  hasSizeOptions: boolean;
  availableSizes?: ISizeOptions[];
}
