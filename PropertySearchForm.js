import React, { useState } from 'react';
import DropdownList from 'react-widgets/DropdownList';
import NumberPicker from 'react-widgets/NumberPicker';
import 'react-widgets/styles.css';

function PropertySearchForm({ onSearch }) {
    const [searchParams, setSearchParams] = useState({
        type: 'any',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        postcode: ''
    });

    const handleChange = (e) => {
        setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchParams);
        console.log(searchParams);
    };

    const postcodes = ['W12', 'RM11', 'SW6', 'SE1','NW4','HA4','CR0'];

    return (
        <div className="search-form-container" >
            <form className="property-search-form" onSubmit={handleSubmit}>

                <div className="form-row">
                <label>Type:</label>
                <DropdownList
                data={['Any', 'House', 'Flat']}
                value={searchParams.type}
                onChange={value => handleChange({ target: { name: 'type', value } })}
                />
                </div>

                <div className="form-row">
          <label>Price Range:</label>
          <NumberPicker className="custom-number-picker"
            name="minPrice"
            placeholder="Min Price"
            value={searchParams.minPrice}
            onChange={value => handleChange({ target: { name: 'minPrice', value } })}
          />
          <NumberPicker className="custom-number-picker"
            name="maxPrice"
            placeholder="Max Price"
            value={searchParams.maxPrice}
            onChange={value => handleChange({ target: { name: 'maxPrice', value } })}
          />
        </div>


               <div className="form-row">
          <label>Bedrooms:</label>
          <NumberPicker className="custom-number-picker"
            name="minBedrooms"
            placeholder="Min Bedrooms"
            value={searchParams.minBedrooms}
            onChange={value => handleChange({ target: { name: 'minBedrooms', value } })}
          />
          <NumberPicker 
            name="maxBedrooms"
            className="custom-number-picker"
            placeholder="Max Bedrooms"
            value={searchParams.maxBedrooms}
            onChange={value => handleChange({ target: { name: 'maxBedrooms', value } })}
          />
        </div>


                <div className="form-row">
          <label>Postcode Area:</label>
          <input
            type="text"
            name="postcode"
            placeholder="e.g., W12"
            value={searchParams.postcode}
            onChange={handleChange}
          />
          </div>

                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default PropertySearchForm;











