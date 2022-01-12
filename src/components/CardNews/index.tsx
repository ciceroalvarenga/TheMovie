import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {PropsNews} from '../../screens/Conteudos';

import {
  Container,
  Image,
  Title,
  StyledIcon,
  IconConainerButton,
  ContainerContent,
  TextNote,
  ContainerNote,
  IconVote,
  TextDate,
} from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  checked?: PropsNews | undefined;
  urlImage: string;
  handleAddToFavorite: (news: PropsNews) => Promise<void>;
  news: PropsNews;
};

export function CardNews({
  urlImage,
  title,
  news,
  checked,
  handleAddToFavorite,
  ...rest
}: Props) {
  return (
    <>
      <Container {...rest}>
        <Image source={{uri: urlImage}} />
        <ContainerContent>
          <Title numberOfLines={1}>{title}</Title>
          <ContainerNote>
            <IconVote name={'star'} />
            <TextNote>{news.vote_average}</TextNote>
          </ContainerNote>
          <TextDate>Data: {news.release_date}</TextDate>
          <TextDate>Popularidade: {news.popularity}</TextDate>
        </ContainerContent>
        <IconConainerButton
          onPress={() => handleAddToFavorite(news)}
          activeOpacity={0.5}>
          <StyledIcon name={!!checked ? 'bookmark' : 'bookmark-outline'} />
        </IconConainerButton>
      </Container>
    </>
  );
}
