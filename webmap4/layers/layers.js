ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2157").setExtent([680107.446372, 712607.631504, 776869.656743, 768307.165331]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_VegetationCarbon_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Vegetation Carbon",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/VegetationCarbon_1.png",
    attributions: ' ',
                                projection: 'EPSG:2157',
                                alwaysInRange: true,
                                imageExtent: [696950.000000, 715500.000000, 733050.000000, 766400.000000]
                            })
                        });
var format_dublinborderscouty_2 = new ol.format.GeoJSON();
var features_dublinborderscouty_2 = format_dublinborderscouty_2.readFeatures(json_dublinborderscouty_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2157'});
var jsonSource_dublinborderscouty_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dublinborderscouty_2.addFeatures(features_dublinborderscouty_2);
var lyr_dublinborderscouty_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dublinborderscouty_2, 
                style: style_dublinborderscouty_2,
                popuplayertitle: "dublinborderscouty",
                interactive: false,
                title: '<img src="styles/legend/dublinborderscouty_2.png" /> dublinborderscouty'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VegetationCarbon_1.setVisible(true);lyr_dublinborderscouty_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VegetationCarbon_1,lyr_dublinborderscouty_2];
lyr_dublinborderscouty_2.set('fieldAliases', {'OSM_ID': 'OSM_ID', 'NAME_TAG': 'NAME_TAG', 'NAME_GA': 'NAME_GA', 'NAME_EN': 'NAME_EN', 'ALT_NAME': 'ALT_NAME', 'ALT_NAME_G': 'ALT_NAME_G', 'LOGAINM_RE': 'LOGAINM_RE', 'OSM_USER': 'OSM_USER', 'OSM_TIMEST': 'OSM_TIMEST', 'ATTRIBUTIO': 'ATTRIBUTIO', 'T_IE_URL': 'T_IE_URL', 'AREA': 'AREA', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'EPOCH_TSTM': 'EPOCH_TSTM', });
lyr_dublinborderscouty_2.set('fieldImages', {'OSM_ID': 'TextEdit', 'NAME_TAG': 'TextEdit', 'NAME_GA': 'TextEdit', 'NAME_EN': 'TextEdit', 'ALT_NAME': 'TextEdit', 'ALT_NAME_G': 'TextEdit', 'LOGAINM_RE': 'TextEdit', 'OSM_USER': 'TextEdit', 'OSM_TIMEST': 'TextEdit', 'ATTRIBUTIO': 'TextEdit', 'T_IE_URL': 'TextEdit', 'AREA': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'EPOCH_TSTM': 'TextEdit', });
lyr_dublinborderscouty_2.set('fieldLabels', {'OSM_ID': 'no label', 'NAME_TAG': 'no label', 'NAME_GA': 'no label', 'NAME_EN': 'no label', 'ALT_NAME': 'no label', 'ALT_NAME_G': 'no label', 'LOGAINM_RE': 'no label', 'OSM_USER': 'no label', 'OSM_TIMEST': 'no label', 'ATTRIBUTIO': 'no label', 'T_IE_URL': 'no label', 'AREA': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'EPOCH_TSTM': 'no label', });
lyr_dublinborderscouty_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});