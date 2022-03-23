import React from 'react';
import Search from '@strapi/icons/Search';
import { Button } from '@strapi/design-system/Button';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

export default function Pool() {
    const d = useCMEditViewDataManager();
    const {modifiedData, slug, isCreatingEntry} = d;
    console.log(d);
    if(slug !== 'api::ido.ido' || isCreatingEntry) {
        console.log('slug not api::ido.id or entry creation:', isCreatingEntry);
        return null;
    }
    function createPool() {
        console.log('creating....')
        console.log('data:', modifiedData);
        //  // get Name of category or Title of an article
        // const q = modifiedData.Name || modifiedData.Title;
        // const url = `https://google.com/search?q=${encodeURIComponent(q)}`;
        // window.open(url, '_blank').focus();
    }
    return (
        <Button variant='secondary' onClick={createPool}>Create IDO Pool</Button>
    )
    
}