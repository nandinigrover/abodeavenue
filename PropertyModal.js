import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Carousel } from 'react-responsive-carousel';
import 'react-tabs/style/react-tabs.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MapTabPanel = ({ property }) => {
  useEffect(() => {
    if (window.google) {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: property.coordinates.lat, lng: property.coordinates.lng },
        zoom: 15
      });

      new window.google.maps.Marker({
        position: { lat: property.coordinates.lat, lng: property.coordinates.lng },
        map: map,
        title: property.location
      });
    }
  }, [property]);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

const PropertyModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="property-modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <Tabs>
          <TabList>
            <Tab>Images & Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <div className="property-details">
              <Carousel showThumbs={false} showStatus={false} dynamicHeight={true}>
                {property.images.map((image, index) => (
                  <div key={index}>
                    <img src={`/${image}`} alt={`View ${index}`} />
                  </div>
                ))}
              </Carousel>
              <div className="property-info">
                <h2>{property.type} - £{property.price.toLocaleString()}</h2>
                <p>{property.bedrooms} bedroom(s)</p>
                <p>{property.description}</p>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <img src={`/images/floorplans/${property.id}.jpg`} alt="Floor Plan" className="floorplans"/>
          </TabPanel>

          <TabPanel>
            <MapTabPanel property={property} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyModal;

