import vmTopHeader from "./component/header/top_header.js";
import loadingData from "./component/load/loading.js";
import vmUISearch from "./component/search/key_search.js";
import NavBarFb from "./component/navbar/navbar_home.js";
import inputValidated from "./component/input/input.js";
import homeBook from "./component/navbar/home_book.js";
import mapIotLink from "./component/mapIotlink.js";
import manageTask from "./component/data_tool/manage_task.js";
import NavbarDataTool from "./component/data_tool/navbar.js";

const vmInstance = new Vue({
    el: "#vm-library-ui-ux",
    components: {
        'vm-top-header': vmTopHeader,
        'vm-nav-bar': NavbarDataTool,
        'loading-data': loadingData,
        'key-search': vmUISearch,
        'side-bar-fb': NavBarFb,
        'input-text': inputValidated,
        'home-book': homeBook,
        'map-iotlink': mapIotLink,
        "manage-task": manageTask,
    },
    methods: {
        handlerChange: function (data) {
            // console.log(data)
        },
        handlerChangeInitMap: function ($e) {
            const center = $e.target.value.split(',');
            this.$refs.map4d.map.panTo({lat: center[0], lng: center[1]});
        },
        handleChangeLogo: function ($e) {
            const src = URL.createObjectURL($e.target.files[0]);
            this.$refs.preViewLogo1.src = src;
        },
    }
})