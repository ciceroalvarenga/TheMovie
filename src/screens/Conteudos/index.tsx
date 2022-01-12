import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {CardNews} from '../../components/CardNews';
import {FooterList} from '../../components/FooterList';
import {Shimmer} from '../../components/Shimmer';
import {useFavorites} from '../../hooks/useFavorite';
import {getNews} from './conteudosServices';

import {Container, ContainerCard} from './styles';

export type PropsNews = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
  popularity: number;
};

export function Conteudos() {
  const [news, setNews] = useState<PropsNews[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingShimmer, setLoadingShimmer] = useState(false);
  const [page, setPage] = useState(1);

  const {favorites, addToFavorite, removeFromFavorite} = useFavorites();

  useEffect(() => {
    setLoadingShimmer(true);
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) return;
    setLoading(true);
    const response = await getNews({page});
    setLoadingShimmer(false);
    setNews([...news, ...response]);
    setPage(page + 1);
    setLoading(false);
  }

  async function handleAddToFavorite(news: PropsNews) {
    const newsFound = favorites.find(favorite => favorite.id === news.id);
    if (!newsFound) {
      await addToFavorite(news);
    } else {
      await removeFromFavorite(news.id);
    }
  }

  return (
    <Container>
      <ContainerCard>
        {loadingShimmer ? (
          <>
            <Shimmer />
            <Shimmer />
          </>
        ) : (
          <FlatList
            data={news}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <>
                <CardNews
                  key={item.id}
                  news={item}
                  handleAddToFavorite={() => handleAddToFavorite(item)}
                  checked={favorites.find(favorite => favorite.id === item.id)}
                  title={item.title}
                  urlImage={`http://image.tmdb.org/t/p/w185/${item.poster_path}`}
                />
              </>
            )}
            onEndReached={loadApi}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FooterList load={loading} />}
          />
        )}
      </ContainerCard>
    </Container>
  );
}
