interface ColorVariants {
  main: string;
  l1: string;
}

export interface Colors {
  primary: ColorVariants;
  secondary: ColorVariants;
  white: string;
  black: string;
  text: string;
  background: string;
}

export const colors: Colors = {
  primary: {
    main: '#3d315b',
    l1: '#bc3843',
  },
  secondary: {
    main: '#00a9a5',
    l1: '#20e99f',
  },
  white: '#ffffff',
  black: '#000000',
  text: '#292f36',
  background: '#fffcff',
};

export default colors;
