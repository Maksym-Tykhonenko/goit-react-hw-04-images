import {useState} from "react";
import { toast } from 'react-hot-toast';

import {Header, Form, Input, Btn, BtnLable} from './Searchbar.styled';

export function Searchbar ({onSubmit}){

  const [query, setQuery]= useState('')

  const handleInputSearch =(e)=>{
    setQuery(e.currentTarget.value)
  }

  const hendleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === ''){
      toast.error('ВВЕДІТЬ ПОШУКОВИЙ ЗАПИТ!!!!');
    }
    else{
      onSubmit(query)
    };
  
    setQuery('');
  
  };

    return (
      <Header>
        <Form
          onSubmit={hendleSubmit}
        >
          <Btn type="submit">
            <BtnLable>Search</BtnLable>
          </Btn>
          <Input
            value={query}
            name="query"
            onChange={handleInputSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
};