import loadingData from "../load/loading.js";
import SettingNavBar from "./setting.js";

const NavBarFb = {
    components: {
        'loading-data': loadingData,
        'setting-item': SettingNavBar,
    },
    template: `
    <div class="navbar__fb--swapper position-absolute">
    <div class="navbar__fb--container w-100 h-100 position-relative">
        <div class="navbar__pc">
            <ul class="m-0 p-0 w-100">
                <li title="chức năng 1" @click="activeNav(0)" :class="{'navbar__active': view.active.cn1}"><i class="bi bi-newspaper"></i></li>
                <li title="chức năng 2" @click="activeNav(1)" :class="{'navbar__active': view.active.cn2}"><i class="bi bi-paperclip"></i></li>
                <li title="chức năng 3" @click="activeNav(2)" :class="{'navbar__active': view.active.cn3}"><i class="bi bi-pencil-square"></i></li>
            </ul>
            <ul class="m-0 p-0 w-100">
                <li title="hoangthiet" @click="activeNav(3)" :class="{'navbar__active': view.active.user}"><i class="bi bi-person-circle"></i></li>
                <li title="Cài đặt" @click="activeNav(4)" :class="{'navbar__active': view.active.setting}"><i class="bi bi-gear"></i></li>
            </ul>
        </div>
        <div class="navbar__mobile">
            <ul class="m-0 p-0 h-100 w-100 row">
                <li class="col" title="chức năng 1" @click="activeNav(0)" :class="{'navbar__active': view.active.cn1}"><i class="bi bi-newspaper"></i></li>
                <li class="col" title="chức năng 2" @click="activeNav(1)" :class="{'navbar__active': view.active.cn2}"><i class="bi bi-paperclip"></i></li>
                <li class="col" title="chức năng 3" @click="activeNav(2)" :class="{'navbar__active': view.active.cn3}"><i class="bi bi-pencil-square"></i></li>
                <li class="col" title="hoangthiet" @click="activeNav(3)" :class="{'navbar__active': view.active.user}"><i class="bi bi-person-circle"></i></li>
                <li class="col" title="Cài đặt" @click="activeNav(4)" :class="{'navbar__active': view.active.setting}"><i class="bi bi-gear"></i></li>
            </ul>
        </div>
    </div>
    <div class="navbar__details__all">
        <setting-item :show="view.active.setting" @close="activeNav(4)"></setting-item>
    </div>
    </div>`,
    data: function () {
        return {
            view: {
                active: {
                    cn1: false,
                    cn2: false,
                    cn3: false,
                    user: false,
                    setting: false,
                }
            }
        }
    },
    methods: {
        activeNav: function (index) {
            //[cn1, cn2, cn3, user, setting]
            const vm = this;
            switch (index) {
                case 0:
                    vm.view.active.cn1 = !vm.view.active.cn1;
                    break;
                case 1:
                    vm.view.active.cn2 = !vm.view.active.cn2;
                    break;
                case 2:
                    vm.view.active.cn3 = !vm.view.active.cn3;
                    break;
                case 3:
                    vm.view.active.user = !vm.view.active.user;
                    break;
                case 4:
                    vm.view.active.setting = !vm.view.active.setting;
                    break;
                default:
                // code block
            }
        },
    },
}

export default NavBarFb;