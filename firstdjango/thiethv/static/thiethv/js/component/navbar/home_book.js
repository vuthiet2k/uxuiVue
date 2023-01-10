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
    <div class="card h-100 w-100 position-relative">
        <div class="card__header--book d-md-flex d-none justify-content-end">
            <ul class="row h-100 w-100 m-0 p-0 ps-3" style="max-width: 500px;">
                <li @click="activeNav(0)" :class="{'book--active': vShowTab(0)}" class="col ms-3">Publications</li>
                <li @click="activeNav(1)" :class="{'book--active': vShowTab(1)}" class="col ms-3">Authors</li>
                <li @click="activeNav(2)" :class="{'book--active': vShowTab(2)}" class="col ms-3">Journals</li>
                <li @click="activeNav(3)" :class="{'book--active': vShowTab(3)}" class="col ms-3">Citations</li>
            </ul>
        </div>
        <div class="card__header--book d-flex d-md-none justify-content-between position-relative">
            <i class="bi bi-list position-absolute" style="right: 10px; top: 0; bottom: 0; font-size: 30px;"></i>
        </div>
        <div class="p-3 h-100 d-flex" style="background-color: rgba(3, 3, 3, 0.03)">
            <div class="w-100" v-show="vShowTab(0)">
                <publications-item></publications-item>
            </div>
            <div class="w-100" v-show="vShowTab(1)">
                <div class="container">
                    <h5>Author Name or MR Author ID</h5>
                    <input-text :placeholder="'Nhập tên...'" :label="'Tên :'"></input-text>
                    <h6>Example: Hilbert, D* or 85745</h6>
                    <button class="mt-3 btn btn-primary">Search</button>
                </div>
            </div>
            <div class="w-100" v-show="vShowTab(2)">
                <div class="container">
                    <h5>Journal</h5>
                    <input-text :placeholder="'Nhập tên...'" :label="'Tên :'"></input-text>
                    <h6>Enter a journal abbreviation, journal name, partial name, or an ISSN</h6>
                    <button class="mt-3 btn btn-primary">Search</button>
                </div>
            </div>
            <div class="w-100" v-show="vShowTab(3)">
            </div>
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