import React from 'react';
import Search from '@strapi/icons/Search';
import { Button } from '@strapi/design-system/Button';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

export default function Google() {
    const {modifiedData} = useCMEditViewDataManager();
    console.log(modifiedData);
    function handleSearch() {
        console.log('searching....')
         // get Name of category or Title of an article
        const q = modifiedData.Name ? modifiedData.Name : modifiedData.Title;
        const url = `https://google.com/search?q=${encodeURIComponent(q)}`;
        window.open(url, '_blank').focus();
    }
    return (
        <Button variant='secondary' startIcon={<Search />} onClick={handleSearch}>Try Google!</Button>
    )
    
}