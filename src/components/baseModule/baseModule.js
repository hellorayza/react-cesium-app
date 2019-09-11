import React, { Component } from 'react';
// import Cesium from 'cesium/Build/Cesium';
import Cesium from 'cesium/Cesium';
import './baseModule.css';
// CesiumNavigation
// import viewerCesiumNavigationMixin from "cesium-navigation";
import CesiumNavigation from "cesium-navigation-es6";



let viewer;
class BaseModule extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        // load google map
        var googleMapUrl = "http://mt1.google.cn/vt/lyrs=s&hl=zh-CN&x={x}&y={y}&z={z}&s=Gali";
        var googleMap = new Cesium.UrlTemplateImageryProvider({ url: googleMapUrl });

        var options = {};
        // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
        options.defaultResetView = Cesium.Rectangle.fromDegrees(80, 22, 130, 50);
        // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
        options.enableCompass= true;
        // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
        options.enableZoomControls= true;
        // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
        options.enableDistanceLegend= false;
        // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
        options.enableCompassOuterRing= true;
         
        
        viewer = new Cesium.Viewer("cesiumContainer", {
            imageryProvider: googleMap,
        });
        
        CesiumNavigation(viewer, options);
        // var options = {};  
        // options.defaultResetView = Cesium.Rectangle.fromDegrees(71, 3, 90, 14);  
        // // Only the compass will show on the map  
        // options.enableCompass= true;  
        // options.enableZoomControls= false;  
        // options.enableDistanceLegend= false;  
        // options.enableCompassOuterRing= true;  
        // cesiumViewer.extend(Cesium.viewerCesiumNavigationMixin, options);  


      

        


    }

    render() {
        return (
            <div className="main">
                <div id="cesiumContainer" />
            </div>
        )
    }
}

export default BaseModule;