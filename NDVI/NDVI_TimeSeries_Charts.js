//Choose country using GEE Feature Collection
//var region = ee.FeatureCollection('ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw').filterMetadata('Country', 'equals', 'place name');

// Import region
//var region = geometry;

//Add region outline to layer - for selected countries
//Map.addLayer(region,{},'enter country name')

// Collect data and filter by total dates
var modisNDVI2 = ee.ImageCollection('MODIS/MCD43A4_006_NDVI');




//USING ALTERBATIVE COLLECTION for this years time series because the collection above ends at 2017
//using this new collection results to over 5000 Elements hence failure



// Charts //
//Long-Term Time Series

var collection01 = ee.ImageCollection(modisNDVI.filterDate('2017-03-15', '2020-12-31'));
var clipped01 = collection01.mean().clip(roi);
var TS1 = ui.Chart.image.seriesByRegion(collection01, roi,  ee.Reducer.mean(),'NDVI', 500).setOptions({
          title: 'NDVI Long-Term Time Series',
          vAxis: {title: 'NDVI'},
});
print(TS1);

//Short-Term Time Series
var collection02 = ee.ImageCollection(modisNDVI.filterDate('2022-01-01', '2022-12-31'));
var clipped02 = collection02.mean().clip(roi);
var TS2 = ui.Chart.image.seriesByRegion(collection02, roi,  ee.Reducer.mean(),'NDVI', 500).setOptions({
          title: 'NDVI Short-Term Time Series',
          vAxis: {title: 'NDVI'},
});
print(TS2);

//Set Center of Map & Add Clipped Image Layer

//Map.addLayer (clipped02,vis, 'NDVI_2022');


//long, lat, zoom
Map.setCenter(36, -7,8);

