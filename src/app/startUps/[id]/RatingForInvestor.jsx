'use client';

import { useState } from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function RatingForInvestor({ defaultValue = 0 }) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('القيمة الجديدة:', newValue);
    };

    return (
        <Rating
            name="text-feedback"
            value={value}
            precision={0.5}
            onChange={handleChange}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
    );
}