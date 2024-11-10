ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2157").setExtent([666773.948224, 713145.669472, 763601.990208, 768883.098157]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_TerrestrialFood_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Terrestrial Food",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TerrestrialFood_1.png",
    attributions: ' ',
                                projection: 'EPSG:2157',
                                alwaysInRange: true,
                                imageExtent: [696950.000000, 715500.000000, 733050.000000, 766400.000000]
                            })
                        });
var format_countyDublin_2 = new ol.format.GeoJSON();
var features_countyDublin_2 = format_countyDublin_2.readFeatures(json_countyDublin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2157'});
var jsonSource_countyDublin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countyDublin_2.addFeatures(features_countyDublin_2);
var lyr_countyDublin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_countyDublin_2, 
                style: style_countyDublin_2,
                popuplayertitle: "countyDublin",
                interactive: false,
                title: '<img src="styles/legend/countyDublin_2.png" /> countyDublin'
            });

lyr_OSMStandard_0.setVisible(true);lyr_TerrestrialFood_1.setVisible(true);lyr_countyDublin_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_TerrestrialFood_1,lyr_countyDublin_2];
lyr_countyDublin_2.set('fieldAliases', {'USERID': 'USERID', 'label': 'label', 'CC_ID': 'CC_ID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'GUID': 'GUID', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'OBJECTID': 'OBJECTID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_countyDublin_2.set('fieldImages', {'USERID': 'TextEdit', 'label': 'TextEdit', 'CC_ID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'GUID': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'OBJECTID': 'Range', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_countyDublin_2.set('fieldLabels', {'USERID': 'no label', 'label': 'no label', 'CC_ID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'GUID': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'OBJECTID': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_countyDublin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});