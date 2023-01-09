import vmTopHeader from "./component/header/top_header.js";
import loadingData from "./component/load/loading.js";
import vmUISearch from "./component/search/key_search.js";
import NavBarFb from "./component/navbar/navbar_home.js";
import inputValidated from "./component/input/input.js";
import homeBook from "./component/navbar/home_book.js";

const vmInstance = new Vue({
    el: "#vm-library-ui-ux",
    components: {
        'vm-top-header': vmTopHeader,
        'loading-data': loadingData,
        'key-search': vmUISearch,
        'side-bar-fb': NavBarFb,
        'input-text': inputValidated,
        'home-book': homeBook,
    },
    methods: {
        handlerChange: function (data) {
            // console.log(data)
        },
    }
})