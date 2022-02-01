import styled from '@emotion/styled';

export interface CardImageProps {
  src: string;
  alt: string;
}

const StyledCardImage = styled.img<CardImageProps>`
  background-size: cover;
  width: 100%;
  height: auto;
`;

export function CardImage(props: CardImageProps) {
  const { src, alt } = props;
  return <StyledCardImage src={src} alt={alt} />;
}

export default CardImage;
