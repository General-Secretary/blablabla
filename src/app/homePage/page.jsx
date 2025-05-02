import React from 'react'
import SuitableCo from '../../components/homePage Comp/SuitableCo';
import SuitableCharities from '@/components/homePage Comp/SuitableCharities';
import SearchBar from './../../components/homePage Comp/SearchBar';

export default function page() {
    return (
        <div className="overflow-auto">
            <div className="mt-14 text-white">
                <SearchBar />
                <SuitableCo />
                <SuitableCharities />
            </div>
        </div>
    )
}
