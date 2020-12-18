var size = 0;
var placement = 'point';

var style_ViennaParcels2006FeatureLabelsMAP_LOT_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'.SF NS Text\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("\"tax_extract_Account Name\" + '\n Land:' +\"tax_extract_Land Valuation\" + '\nBuilding:' + \"tax_extract_Building Valuation\"") !== null) {
        labelText = String(feature.get("\"tax_extract_Account Name\" + '\n Land:' +\"tax_extract_Land Valuation\" + '\nBuilding:' + \"tax_extract_Building Valuation\""));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 2.799999999999997 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(63,41,226,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
