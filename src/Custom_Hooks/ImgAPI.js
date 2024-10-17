import React from 'react';
import axios from 'axios';
export const ImageUrl = async image => {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMGBB}`, formData)
    return data.data.display_url
};
