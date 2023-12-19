//Choose country using GEE Feature Collection substitute 'countryname' with your choice country
//var region = ee.FeatureCollection('ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw').filterMetadata('Country', 'equals', 'countryname');

// Import region
//var region = geometry;

//Add region outline to layer - for selected countries
//Map.addLayer(region,{},'countryname')

// Collect data and 
var modisNDVI = ee.ImageCollection('MODIS/MCD43A4_006_NDVI').select('NDVI');

// Image collections for NDVI for all years, one value per month.




//Centre the map with long, lat, zoom
Map.setCenter(36, -7,8);


//SEASONAL THEMATIC MAPS

var collection02 = ee.ImageCollection(modisNDVI.filterDate('2022-03-01', '2022-03-31'));
var ndvi = collection02.mean().clip(roi);
Map.addLayer (ndvi, vis, 'NDVI_March');

Export.image.toDrive({
    image: ndvi, 
    description: "NDVI_March", 
    region: roi, 
    scale: 30 ,
    maxPixels: 1e13});
    

var collection02 = ee.ImageCollection(modisNDVI.filterDate('2002-10-01', '2002-10-31'));
var ndvi = collection02.mean().clip(roi);
Map.addLayer (ndvi, vis, 'NDVI_Oct');

Export.image.toDrive({
    image: ndvi, 
    description: "NDVI_Oct", 
    region: roi, 
    scale: 30 ,
    maxPixels: 1e13});
    