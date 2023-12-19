//Import Geomentry
//users/rugilandavyi/Shapefiles/Rufiji_basin_delienation

// Collect data 
var modisNDVI = ee.ImageCollection('MODIS/MCD43A4_006_NDVI').select('NDVI');


//Collect data and Filter by dates
var collection01 = ee.ImageCollection(modisNDVI.filterDate('2000-01-01', '2022-12-31'));
var clipped01 = collection01.mean().clip(roi);
var TS = ui.Chart.image.seriesByRegion(collection01, roi,  ee.Reducer.mean(),'NDVI', 500).setOptions({
          title: 'NDVI',
          vAxis: {title: 'NDVI'},
});
print(TS);



var collection02 = ee.ImageCollection(modisNDVI.filterDate('2000-01-01', '2000-12-31'));
var clipped02 = collection02.mean().clip(roi);
var TS = ui.Chart.image.seriesByRegion(collection02, roi,  ee.Reducer.mean(),'NDVI',500).setOptions({
          title: 'NDVI2',
          vAxis: {title: 'NDVI'},
});
print(TS);