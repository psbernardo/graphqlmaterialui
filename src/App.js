
import './App.css';
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import SaveIcon from '@mui/icons-material/Save';
import PreviewIcon from '@mui/icons-material/Preview';
import {
  Stack,
  Box,
  TextField,
  Button

} from '@mui/material'
import { useState,useEffect  } from "react";
// import { useEffect, useState } from 'react'
import { useQuery, useMutation , gql } from "@apollo/client";

import People from './People';
import SearchHistory from './SearchHistory';

const PEOPLE_QUERY = gql`
  query  search($filter: String!){
  search(filter: $filter){
    count 
		next 
		previous
		results{
      name
      height
      mass
      hairColor
      skinColor
      eyeColor
      birthYear
      gender
      films{
        title
        episodeId
        director
        producer
        releaseDate
      }
			vehicles{
        name
				model
      }
      created
      edited
      url
    }
    
  }
}`;

const SEARCH_HISTORY = gql`
 query  {
  getSearchHistory
}`;


const SAVE_SEARCH = gql`
 mutation SaveSearchResult($searchResult: SearchResult!){
  saveSearchResult(input: $searchResult){
    message
  }
}`;

function App() {
  const { operations, models } = useAlbumFilters();
  const [filter, setFilter] = useState("");
  const [results, setResults] = useState(undefined);
  const [isSearching, setIsSearching] = useState(true);
  const { data, loading, error, refetch  } = useQuery(PEOPLE_QUERY,{
    variables: {filter },
  });

  useEffect(() => {
	setResults(data?.search?.results)
  }, [data]);


 const { searchHistoryData = data, searchHistoryLoading = loading, searchHistoryError = error, searchHistoryRefetch = refetch  } = useQuery(SEARCH_HISTORY);

  const [addSearch, { saveData = data , saveLoading = loading , saveError = error }] = useMutation(SAVE_SEARCH);
  

   return (
    <Stack
      mb={2}
      gap={1.5}
      sx={{
        backgroundColor: `grey.50`,
        padding: 7,
        borderRadius: 1.5,
      }}>
      <Stack
       direction="row"
      sx={{
        maxWidth: '100%',
        marginTop: '50px',
      }}
      >
      <TextField 
        size="small"
        fullWidth label="Search" id="fullWidth"  
        sx={{
        height: '40px !important',
        marginRight: '10px'   
          }}
           onChange={(e) => operations.updateFilter("filter", e.target.value)}
      />

      <Button
        startIcon={<SearchIcon />}
        variant="outlined"
        type="submit"
        sx={{
            height: '40px',
            width: '40%',
             marginRight: '10px'   
          }}
           onClick={(e) => {  
            setIsSearching(()=>true)
            refetch({
            filter: models.filters.filter ,
          })
        
        }}
      >
        Search
      </Button>

      <Button
        startIcon={<SaveIcon />}
        variant="outlined"
        type="submit"
        sx={{
            height: '40px',
            width: '40%',
            marginRight: '10px'   
          }}
           oncli={e => {
         
          addSearch({ variables: { searchResult: { key: models.filters.filter} } });
          console.log("test");
           e.preventDefault();
          
        }}
      >
        Save Result
      </Button>


      <Button
        startIcon={<PreviewIcon />}
        variant="outlined"
        type="submit"
        sx={{
            height: '40px',
            width: '40%',
          }}
        
        onClick={(e) => {  
            setIsSearching(()=>false)
            searchHistoryRefetch({
            filter: models.filters.filter ,
          })
        
        }}
          
      >
        Show  Save Result
      </Button>
    </Stack>


    { //Check if message failed
        (isSearching)
          ?  <FilterResult 
              loading ={loading}
              error={error} 
              results={results}
              isSearching = {isSearching} >
              </FilterResult>
          : <SearchHistory 
          keyList = {searchHistoryData?.data?.getSearchHistory}
          searchHistoryLoading = {searchHistoryLoading}
          ></SearchHistory>
      }

     
    </Stack>
  );
}


const  FilterResult = (props) => {
  const { loading,error, results } = props
  if (loading && !results) return "Loading...";
  if (error) return <pre>{error.message}</pre>

 

   return (
        <Box sx={{  pb: 1 }}>
        {results?.map((people) => (
            <People key={people.name}  People={people}></People>
         ))}
       </Box>
  );
  
  }

function useAlbumFilters() {
  const [filters, _updateFilter] = useState({ 
    filter: undefined, 
  });

  const updateFilter = (filterType, value) => {
    _updateFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters },
    operations: { updateFilter },
  };
}




export default App;

