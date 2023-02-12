import loadingData from '../load/loading.js'
import API from "../../hook/api.js";

const vmUISearch = {
    props: {
        button: {
            type: String,
            default: ''
        },
        api: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: 'Tìm kiếm...',
        },
        prototypeName: {
            type: String,
            default: 'name',
        }
    },
    data: function () {
        return {
            search: '',
            dataUI: [],
            isLoading: false,
            focus: false,
            setTimeGetApi: undefined,
        }
    },
    components: {
        'loading-data': loadingData,
    },
    template: `
    <div class="mx-3" style="position: relative; background-color: #fff; border-radius: 5px;">
        <div class="my-3" style="border: 1px solid #ccc;border-radius: 5px;height: 40px">
            <div class="d-flex w-100">
                <i class="bi bi-search d-flex align-items-center" style="font-size: 16px;margin-left: 12px;"></i>
                <input class="form-control" @focus="handleFocus" @blur="handleFocusOut"
                 v-model="search" @keyup="handleSearch" type="text" :placeholder="placeholder"
                 style="border: none; box-shadow: none;">
            </div>
        </div>
        <div v-if="focus" class="ux-ui-search-thiethv">
            <div class="card" style="max-height: 217px; overflow-y: scroll;">
                <ul class="list-group">
                    <li v-for="item in dataUI" @click="handleClickResult(item)" style="cursor: pointer;"
                    class="list-group-item">{{ item[prototypeName] }}</li>
                    <li v-if="!dataUI.length && !isLoading" class="list-group-item"><b>Không có dữ liệu nào!</b></li>
                    <loading-data v-if="isLoading"></loading-data>
                </ul>
            </div>
        </div>
    </div>`,
    mounted: function () {
        this.handleSearch();
    },
    methods: {
        handleFocus: function () {
            this.focus = true;
        },
        handleFocusOut: function () {
            const vm = this;
            setTimeout(function () {
                vm.focus = false;
            }, 500)
        },
        handleSearch: function () {
            const vm = this;
            clearTimeout(vm.setTimeGetApi);
            vm.dataUI = [];
            vm.isLoading = true;
            vm.setTimeGetApi = setTimeout(async function () {
                API().get(`${vm.api}?q=${vm.search}`)
                    .then(res => {
                        if (res?.results) {
                            vm.dataUI = res.results;
                        }
                        vm.isLoading = false;
                    })
            }, 500)
        },
        handleClickResult: function (result) {
            this.search = result.name;
            this.$emit('result', result);
        },
    },
}

export default vmUISearch;