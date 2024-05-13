'use strict';

    const API_KEY = '43804581-49fe3e91f026bba4b33393e39';
    const BASE_URL = `https://pixabay.com/api/`;

    export function fetchImg(q) {
      const searchParams = new URLSearchParams({
        key: API_KEY,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      });
    
      return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      });
    }