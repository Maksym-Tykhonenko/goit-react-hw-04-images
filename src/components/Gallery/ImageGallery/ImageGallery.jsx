import {useState, useEffect} from "react";
import { getImgs } from "servises/api";

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../../Button/Button';
import { Loader } from "components/Loader/Loader";

import {GallaryList } from './ImageGallery.styled';

export function ImageGallery({query}) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const onLoadMoreClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    setPage(1);
    setData([]);
  }, [query]);

  useEffect(() => {
    async function fetchImg() {
      try {
        if (query === '') {
          return;
        }
        setLoading(true);
        const imgList = await getImgs(query, page);
        setData(prevData => [...prevData, ...imgList.hits]);
        setLoading(false);

        //getImgs(query, page)
        //.then(data => this.setState({
        //  data: data.hits
        //})).catch(error => this.setState({ error }))
        //.finally(() => this.setState({ loading: false }));
        
      }
      catch (error) {
        setError(true)
        setLoading(false);
      };
    };
    fetchImg();
  }, [page, query]);

    return (
      <>
        {loading && <Loader />}
        <GallaryList>
          {error && <div>Thometing wrong!</div>}
          {data.map((item) => {
            return (
              <ImageGalleryItem
                key={item.id}
                webImg={item.webformatURL}
                tags={item.tags}
                largeImg={item.largeImageURL}
              />
            )
          })}
        </GallaryList>
        {data.length > 0 && <Button onClick={onLoadMoreClick} />}
      </>
    );
  };