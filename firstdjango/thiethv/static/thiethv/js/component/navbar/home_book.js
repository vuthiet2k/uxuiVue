import loadingData from "../load/loading.js";
import Publications from "./Publications.js";
import inputValidated from "../input/input.js";

const homeBook = {
    components: {
        'loading-data': loadingData,
        'publications-item': Publications,
        'input-text': inputValidated,
    },
    template: `
    <div class="h-100 w-100 position-relative" style="background-image: linear-gradient(180deg, #fff, #ffe8d2 ); max-width: 1100px;border-radius: 15px; overflow: hidden; box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);">
        <div class="card__header--book d-md-flex d-none">
            <ul class="row h-100 w-100 m-0 p-0" style="max-width: 500px;">
                <li @click="activeNav(0)" :class="{'book--active': vShowTab(0)}" class="col">Publications</li>
                <li @click="activeNav(1)" :class="{'book--active': vShowTab(1)}" class="col ms-3">Authors</li>
                <li @click="activeNav(2)" :class="{'book--active': vShowTab(2)}" class="col ms-3">Journals</li>
                <li @click="activeNav(3)" :class="{'book--active': vShowTab(3)}" class="col ms-3">Citations</li>
            </ul>
        </div>
        <div class="card__header--book d-flex d-md-none justify-content-between position-relative">
            <i class="bi bi-list position-absolute" style="right: 10px; top: 0; bottom: 0; font-size: 30px;"></i>
        </div>
        <div class="p-3 h-100 d-flex" style="">
            <div class="w-100" v-show="vShowTab(0)">
                <publications-item></publications-item>
            </div>
            <div class="w-100" v-show="vShowTab(1)">
                <div class="container">
                    <h5 style="color: #f17400; font-weight: bold; font-size: 16px;">Author Name or MR Author ID</h5>
                    <input class="form-control mt-3" placeholder="...">
                    <p class="mt-2" style="color: #828282">Example: Hilbert, D* or 85745</p>
                    <button class="mt-5 btn btn-primary">Search</button>
                </div>
            </div>
            <div class="w-100" v-show="vShowTab(2)">
                <div class="container">
                    <h5 style="color: #f17400; font-weight: bold; font-size: 16px;">Journal</h5>
                    <input class="form-control mt-3" placeholder="...">
                    <p class="mt-2" style="color: #828282">Enter a journal abbreviation, journal name, partial name, or an ISSN</p>
                    <button class="mt-5 btn btn-primary">Search</button>
                </div>
            </div>
            <div class="w-100" v-show="vShowTab(3)">
            </div>
        </div>
        <div class="p-2 mt-3 d-flex justify-content-between align-items-center" style="background-color: #fee2bf; height: 48px;">
            <div class="d-flex align-items-center h-100"><p class="fst-italic m-0"><b>Facts and Figures:</b>&nbsp; 4,168,152 total publications</p></div>
            <div class="d-flex align-items-center"><a class="m-1 pe-2" style="border-right: 1px solid #000;">Help</a> <a class="m-1">Contact</a></div>
        </div>
    </div>`,
    data: function () {
        return {
            view: {
                active: 0,
            }
        }
    },
    methods: {
        activeNav: function (index) {
            //[cn1, cn2, cn3, user, setting]
            const vm = this;
            switch (index) {
                case 0:
                    vm.view.active = 0;
                    break;
                case 1:
                    vm.view.active = 1;
                    break;
                case 2:
                    vm.view.active = 2;
                    break;
                case 3:
                    vm.view.active = 3;
                    break;
                default:
                // code block
            }
        },
        vShowTab: function (id) {
            if (this.view.active == id) {
                return true;
            } else {
                return false;
            }
        },
    },
}

export default homeBook;