var wms_layers = [];


        var lyr_GooglemapsAerial_0 = new ol.layer.Tile({
            'title': 'Google maps - Aerial',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_ViennaParcels2006Features_1 = new ol.format.GeoJSON();
var features_ViennaParcels2006Features_1 = format_ViennaParcels2006Features_1.readFeatures(json_ViennaParcels2006Features_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViennaParcels2006Features_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViennaParcels2006Features_1.addFeatures(features_ViennaParcels2006Features_1);
var lyr_ViennaParcels2006Features_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViennaParcels2006Features_1, 
                style: style_ViennaParcels2006Features_1,
                interactive: true,
                title: '<img src="styles/legend/ViennaParcels2006Features_1.png" /> ViennaParcels2006 Features'
            });
var format_ViennaParcels2006FeatureLabelsMAP_LOT_2 = new ol.format.GeoJSON();
var features_ViennaParcels2006FeatureLabelsMAP_LOT_2 = format_ViennaParcels2006FeatureLabelsMAP_LOT_2.readFeatures(json_ViennaParcels2006FeatureLabelsMAP_LOT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViennaParcels2006FeatureLabelsMAP_LOT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViennaParcels2006FeatureLabelsMAP_LOT_2.addFeatures(features_ViennaParcels2006FeatureLabelsMAP_LOT_2);
var lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViennaParcels2006FeatureLabelsMAP_LOT_2, 
                style: style_ViennaParcels2006FeatureLabelsMAP_LOT_2,
                interactive: true,
                title: '<img src="styles/legend/ViennaParcels2006FeatureLabelsMAP_LOT_2.png" /> ViennaParcels2006 Feature Labels (MAP_LOT)'
            });

lyr_GooglemapsAerial_0.setVisible(true);lyr_ViennaParcels2006Features_1.setVisible(true);lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2.setVisible(true);
var layersList = [lyr_GooglemapsAerial_0,lyr_ViennaParcels2006Features_1,lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2];
lyr_ViennaParcels2006Features_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'tax_extract_Account Name': 'tax_extract_Account Name', 'tax_extract_Land Valuation': 'tax_extract_Land Valuation', 'tax_extract_Building Valuation': 'tax_extract_Building Valuation', 'tax_extract_Exemption': 'tax_extract_Exemption', 'tax_extract_Assessment': 'tax_extract_Assessment', 'tax_extract_Tax': 'tax_extract_Tax', 'tax_extract_Acres': 'tax_extract_Acres', 'tax_extract_Map-Lot': 'tax_extract_Map-Lot', });
lyr_ViennaParcels2006Features_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'tax_extract_Account Name': 'TextEdit', 'tax_extract_Land Valuation': 'TextEdit', 'tax_extract_Building Valuation': 'TextEdit', 'tax_extract_Exemption': 'TextEdit', 'tax_extract_Assessment': 'TextEdit', 'tax_extract_Tax': 'TextEdit', 'tax_extract_Acres': 'TextEdit', 'tax_extract_Map-Lot': 'TextEdit', });
lyr_ViennaParcels2006Features_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'tax_extract_Account Name': 'no label', 'tax_extract_Land Valuation': 'no label', 'tax_extract_Building Valuation': 'no label', 'tax_extract_Exemption': 'no label', 'tax_extract_Assessment': 'no label', 'tax_extract_Tax': 'no label', 'tax_extract_Acres': 'no label', 'tax_extract_Map-Lot': 'no label', });
lyr_ViennaParcels2006FeatureLabelsMAP_LOT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});