import vmUISearch from "../search/key_search.js";

const createTask = {
    props: {
        typeForm: {
            type: Number,
            required: true,
        }
    },
    components: {
        "manage-user": vmUISearch,
    },
    template: `
    <div style="background-color:#fff; border-radius: 10px; width: 350px; animation: width-100 linear 0.3s; overflow-x: hidden;">
        <div style="width: 350px;">
            <div class="d-fex justify-contents-center p-4">
                <h4 style="text-align: center;">How will task be added to this project?</h4>
            </div>
            <div class="ps-4">
                <div style="margin-left: -18px;">
                    <label class="ms-3">Người quản lý:</label>
                    <div><manage-user :api="'http://127.0.0.1:8000/a'"></manage-user></div>
                </div>
                <p>{{ typeForm }}</p>
                <p>Công việc</p>
                <p>Công việc</p>
                <p>Công việc</p>
                <p>Công việc</p>
            </div>
        </div>
    </div>`,
    data: function () {
        return {}
    },
    methods: {}
}

export default createTask;