import API from "../hook/api.js";

const mapIotLink = {
    props: {
        viewObject: {
            type: Object,
            default: function () {
                return {building: true, mapbuilding: false}
            }
        }
    },
    data: function () {
        return {
            listLocations: [],
            key: "fda0ef247812a0f208b654c89a8f9308",
            center: {lat: 21.787624, lng: 105.510337}, //Cục Tin Học Hóa: 21.019792,105.785025
            map: null,
            polyline: null,
            listPolylines: [],
            marker: null,
            listMarker: [],
            building: {
                mapbuilding: null,
                newbuilding: null,
            },
            location: {},
            addGeoJson: {
                feature: null,
                listFeatures: [],
            },
            markerATK: {
                marker: null,
                listMarker: [],
            },
            view: {
                dragging: {
                    mouseDownClientX: 0,
                    mouseUpClientX: 0,
                },
            }
        }
    },
    template: `<div style="width: 100%; height: 100%; position: relative">
    <div style="position: absolute; top: 0; right: 0; left: 0; bottom: 0;"  ref="map4D"
    @mousedown="startDrag" @mouseup.prevent="stopDrag" 
    @click.prevent="handleClickMapGetLocation" @touchend.prevent="handleTouchendMapGetLocation"> 
    </div>
    <div style="display:none;" class="building__view__wrapper">
    <div class="building__view__container">
        <div class="container__dot--close"></div>
        <div></div>
        <div></div>
        <div></div>
    </div></div></div>`,
    mounted: function () {
        this.initMap();
    },
    methods: {
        startDrag(e) {
            this.view.dragging.mouseDownClientX = e.clientX;
        },
        stopDrag(e) {
            this.view.dragging.mouseUpClientX = e.clientX;
        },
        initMap: function () {
            const vm = this;
            let options = {
                center: vm.center,
                zoom: 19.50,
                bearing: -132.8,
                tilt: 72,
                controls: true,
                geolocate: true,
                mapType: 'map3d'
            };
            this.map = new map4d.Map(this.$refs.map4D, options);
            // Tạo đối tượng marker từ MarkerOption
            // Thêm marker vào bản đồ
            // this.map.enable3dMode(vm.mapbuilding);
            this.map.setWeather("live");
            //chọn đối tượng 3D có sẵn từ map4D
            this.map.addListener("click", (args) => {
                this.location = args.location;
            }, {});
            this.map.addListener("click", (args) => {
                this.building.mapbuilding = args.building;
                // this.building.setSelected(true)
            }, {mapbuilding: true});
            this.map.addListener("click", (args) => {
                this.building.newbuilding = args.building;
                this.building.newbuilding.setSelected(true);
                this.building.newbuilding.setDraggable(true);
            }, {building: true});
            // this.searchMarker(this);
        },
        handlerSearchLocation: async function (searchValue) {
            try {
                let response = await fetch(`http://api.map4d.vn/sdk/autosuggest?key=${this.key}&text=${searchValue}`);
                let data = await response.json();
                return data.result;
            } catch (error) {
                // console.log(error)
            }
        },
        deleteAllDrawingOnMap: function () {
            const vm = this;
            // xoá hết marker cũ
            this.listMarker.forEach(marker => {
                marker.setMap(null)
            })
            this.listPolylines.forEach(polyline => {
                polyline.setMap(null)
            })
            // xét lại mảng ghi nhớ marker
            this.listMarker = [];
            vm.listPolylines = [];
            this.markerATK.listMarker.forEach(marker => {
                marker.setMap(null)
            })
            // xét lại mảng ghi nhớ marker
            this.markerATK.listMarker = [];
            if (vm.polyline !== null) {
                vm.polyline.setMap(null);
                vm.polyline = null;
            }
            if (vm.marker !== null) {
                vm.marker.setMap(null);
                vm.marker = null;
            }
            // Xóa tất cả features khỏi data layer
            vm.addGeoJson.listFeatures.forEach((feature) => {
                feature.forEach(item => {
                    vm.map.data.remove(item)
                })
            })
            vm.addGeoJson.listFeatures = [];
        },
        mannyMarkerMap: function (args) {
            // xoá hết marker cũ
            this.listMarker.forEach(marker => {
                marker.setMap(null)
            })
            // xét lại mảng ghi nhớ marker
            this.listMarker = [];
            if (!args) return;
            if (args) {
                args.forEach((item) => {
                    let _marker = new map4d.Marker({
                        position: item,
                        draggable: true
                    })
                    // Thêm marker vào bản đồ
                    _marker.setMap(this.map);
                    this.listMarker.push(_marker);
                    this.map.panTo(item);
                })
            }
        },
        MarkerMap: function (args, panTo = '') {
            if (this.marker !== null) {
                this.marker.setMap(null);
            }
            this.marker = new map4d.Marker({
                position: args,
            });
            this.marker.setMap(this.map);
            if (!panTo) {
                this.map.panTo(args)
            }
        },
        markerToursATK: function (args, panTo = '', snippet = '', size = 16, img = "/static/web_frontend/images/markerAtkGreen.png") {
            //list
            this.markerATK.listMarker.forEach(marker => {
                marker.setMap(null)
            })
            // xét lại mảng ghi nhớ marker
            this.markerATK.listMarker = [];
            if (!args) return;
            if (args) {
                args.forEach((item, index) => {
                    let _marker = new map4d.Marker({
                        position: item,
                        title: `Địa điểm ${index + 1}`,
                        snippet: snippet,
                        iconView: `<img src=${img} style=\"width: ${size}px; height: ${size}px; background-color: transparent;\"/>`,
                        anchor: [0.5, 0.5],
                    })
                    // Thêm marker vào bản đồ
                    _marker.setMap(this.map);
                    if (!panTo) {
                        this.map.panTo(item)
                    }
                    this.markerATK.listMarker.push(_marker);
                })
            }
        },
        creatNewBuildingMap: function (name, model, texture) {
            // Tạo đối tượng Building là một cây cầu từ BuildingOptions với model và texture
            let building = new map4d.Building({
                name: name,
                position: {lat: 21.019792, lng: 105.785025},
                model: model,
                texture: texture,
            })
            // Thêm building vào bản đồ
            building.setMap(this.map)
        },
        creatNewGeoJson: function (geoJsonStr) {
            if (!geoJsonStr) return;
            const vm = this;
            if (vm.addGeoJson.feature) {
                vm.addGeoJson.feature = null;
            }
            this.addGeoJson.listFeatures.push(vm.map.data.addGeoJson(geoJsonStr));
        },
        directHomePortal: async function (listPoints, mode = 'car', weighting = 0) {
            if (!listPoints[0].lat || !listPoints[0].lng || !listPoints[1].lat || !listPoints[1].lng) {
                return;
            }
            const origin = [listPoints[0].lat, listPoints[0].lng];
            const destination = [listPoints[listPoints.length - 1].lat, listPoints[listPoints.length - 1].lng];
            let points = [];
            if (listPoints.length > 2) {
                for (let i = 1; i < listPoints.length - 1; i++) {
                    if (i === 1) {
                        points = listPoints[i].lat + ',' + listPoints[i].lng;
                    } else {
                        points = points + ';' + listPoints[i].lat + ',' + listPoints[i].lng;
                    }
                }
            }
            const vm = this;
            let _key = vm.key;
            let _origin = origin;
            let _destination = destination;
            let language = "vi";
            let _weighting = weighting;
            let avoid = "";
            let avoidRoad = "";
            let _mode = mode;
            let distance;
            let duration;
            let url = 'https://api.map4d.vn/sdk/route?key=' + _key + '&origin=' + _origin + '&destination=' + _destination + '&points=' + points + '&mode=' + _mode + '&language=' + language + '&weighting=' + _weighting + '&avoid=' + avoid + `&avoidRoad=` + avoidRoad;

            await API.get(url)
                .then(data => {
                        if (data) {
                            distance = data.result.routes[0].distance.text;
                            duration = data.result.routes[0].duration.text;
                            if (!data.result.routes[0].legs.length) return;
                            for (let steps of data.result.routes[0].legs) {
                                steps = steps.steps;
                                for (let i = 0; i < steps.length; i++) {
                                    let location = steps[i].startLocation;
                                    let el = [location.lng, location.lat];
                                    let line = steps[i].polyline;
                                    let arrs_step = vm.decodePolyline(line);
                                    arrs_step.forEach(element => {
                                        var tmp = element[0];
                                        element[0] = element[1];
                                        element[1] = tmp;
                                        vm.listLocations.push(element);
                                    });
                                }
                            }
                            if (vm.polyline !== null) {
                                vm.polyline.setMap(null);
                                vm.polyline = null;
                            }
                            if (vm.listPolylines.length) {
                                vm.listPolylines.forEach(polyline => {
                                    polyline.setMap(null)
                                })
                            }
                            // xét lại mảng ghi nhớ marker
                            vm.listMarker = [];
                            vm.listPolylines = [];
                            if (vm.marker !== null) {
                                vm.marker.setMap(null);
                                vm.marker = null;
                            }
                            // * Foot mode needs to be show dotted style inserted of line style
                            if (mode === "foot")
                                vm.polyline = vm.create_polyline(vm.listLocations, !0, "#0377fc", 5, 1, !1, "dotted");
                            else if (mode === 'car') {
                                vm.polyline = vm.create_polyline(vm.listLocations, !0, "#0377fc", 5, 1, !1, "solid");
                            } else if (mode === 'bike') {
                                vm.polyline = vm.create_polyline(vm.listLocations, !0, "#D2691E", 5, 1, !1, "solid");
                            } else {
                                vm.polyline = vm.create_polyline(vm.listLocations, !0, "#00008B", 5, 1, !1, "solid");
                            }
                            vm.listPolylines.push(vm.polyline);
                            let list_dot_polyline = [[[listPoints[0].lng, listPoints[0].lat], vm.listLocations[0]], [vm.listLocations[vm.listLocations.length - 1], [listPoints[listPoints.length - 1].lng, listPoints[listPoints.length - 1].lat]]];
                            vm.polyline = vm.create_polyline(list_dot_polyline[0], !0, "#aaa", 2, 1, !1, "dotted");
                            vm.listPolylines.push(vm.polyline);
                            vm.polyline = vm.create_polyline(list_dot_polyline[1], !0, "#aaa", 2, 1, !1, "dotted");
                            vm.listPolylines.push(vm.polyline);
                            let listLength = vm.listLocations.length;
                            // Tạo đối tượng marker từ MarkerOption
                            vm.MarkerMap(listPoints[listPoints.length - 1], 'no');
                            vm.marker = new map4d.Marker({
                                position: listPoints[0],
                                title: `Địa điểm bắt đầu`,
                                iconView: `<img src="https://map.map4d.vn/mapAppRoot/icon/directionsIcon/from.svg" style=\"width: 16px; height: 16px; background-color: transparent;\"/>`,
                                anchor: [0.5, 0.5],
                            });
                            vm.marker.setMap(vm.map);
                            // Thêm polyline vào bản đồ
                            vm.listPolylines.forEach(polyline => {
                                polyline.setMap(vm.map);
                            })
                            vm.mapFitBoundsDirect(vm.listLocations);
                            vm.listLocations = [];
                        }
                    }
                )
            return {long: distance, time: duration}
        },
        decodePolyline: function (str, precision) {
            let index = 0,
                lat = 0,
                lng = 0,
                coordinates = [],
                shift = 0,
                result = 0,
                byte = null,
                latitude_change,
                longitude_change,
                factor = Math.pow(10, Number.isInteger(precision) ? precision : 5);

            // Coordinates have variable length when encoded, so just keep
            // track of whether we've hit the end of the string. In each
            // loop iteration, a single coordinate is decoded.
            while (index < str.length) {

                // Reset shift, result, and byte
                byte = null;
                shift = 0;
                result = 0;

                do {
                    byte = str.charCodeAt(index++) - 63;
                    result |= (byte & 0x1f) << shift;
                    shift += 5;
                } while (byte >= 0x20);

                latitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

                shift = result = 0;

                do {
                    byte = str.charCodeAt(index++) - 63;
                    result |= (byte & 0x1f) << shift;
                    shift += 5;
                } while (byte >= 0x20);

                longitude_change = ((result & 1) ? ~(result >> 1) : (result >> 1));

                lat += latitude_change;
                lng += longitude_change;

                coordinates.push([lat / factor, lng / factor]);
            }
            return coordinates;
        }
        ,
        create_polyline: function (path, visible, strokeColor, strokeWidth, strokeOpacity, closed, style) {
            return new map4d.Polyline({
                path: path,
                visible: visible,
                strokeColor: strokeColor,
                strokeWidth: strokeWidth,
                strokeOpacity: strokeOpacity,
                closed: closed,
                style: style
            });
        },
        // listPoint = {lat,lng}
        mapFitBoundsLayerGeoJson: function (resGeoJson) {
            if (!resGeoJson?.features.length) return;
            let bounds = new map4d.LatLngBounds();
            let list_bounds = [];
            for (let features of resGeoJson.features) {
                for (let coordinates of features.geometry.coordinates) {
                    for (let item of coordinates) {
                        list_bounds.push(arrayToObjectLatLng(item));
                    }
                }
            }
            list_bounds.forEach(el => {
                bounds.extend(el);
            })
            let left_fit = 100;
            this.map.fitBounds(bounds, {top: 100, bottom: 100, left: left_fit, right: 100}, {
                duration: 1000,
                animate: true
            });
        },
        mapFitBoundsDirect: function (list_bounds) {
            let bounds = new map4d.LatLngBounds();
            list_bounds.forEach(el => {
                bounds.extend(el);
            })
            let left_fit = 100;
            this.map.fitBounds(bounds, {top: 100, bottom: 100, left: left_fit, right: 100}, {
                duration: 1000,
                animate: true
            });
        },
        // check active element
        checkActiveEl: function (e, elements, activeClass) {
            $(elements).not(e.currentTarget).removeClass(activeClass);
            $(e.currentTarget).toggleClass(activeClass);
        },
        handleClickMapGetLocation: function () {
            const vm = this;
            if (Math.abs(vm.view.dragging.mouseDownClientX - vm.view.dragging.mouseUpClientX) < 10) {
                vm.$emit('click-map-iotlink', vm.location);
            }
        },
        handleTouchendMapGetLocation: function () {
            const vm = this;
            if (vm.view.dragging.mouseDownClientX === vm.view.dragging.mouseUpClientX) {
                setTimeout(function () {
                    vm.$emit('click-map-iotlink', vm.location);
                }, 500);
            }
        }
    },
};

export default mapIotLink;
