import styled from '@emotion/styled';

export interface CardImageProps {
  src: string;
  alt: string;
}

const StyledCardImage = styled.img<CardImageProps>`
  width: 100%;
  height: 132px;
  object-fit: cover;
`;

export function CardImage(props: CardImageProps) {
  const { src, alt } = props;
  return <StyledCardImage src={src} alt={alt} />;
}

export default CardImage;
