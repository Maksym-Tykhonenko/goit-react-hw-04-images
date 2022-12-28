import { useState } from "react";
import { Toaster } from 'react-hot-toast';

import {Searchbar }from "./Searchbar/Searchbar";
import { ImageGallery } from "./Gallery/ImageGallery/ImageGallery";

import { Wrapp } from './App.styled';

export function App() {
  const [query, setQuery] = useState('');

const onSubmit =(query) => {
setQuery(query);
}

    return (
      <Wrapp>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery query={query} />
        <Toaster  position="top-right"
          reverseOrder={false}
        />
      </Wrapp>
    );
  };

