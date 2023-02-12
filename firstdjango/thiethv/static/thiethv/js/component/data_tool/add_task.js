const addTaskIcon = {
    props: {
        newIcon: {
            type: Boolean,
            default: false,
        },
        index: {
            type: Number,
            default: 0,
        }
    },
    template: `
    <div class="ms-3 position-relative"
         style="background-color:#fff; border-radius: 50%; width: 50px; height: 50px;">
        <h2 title="Thêm mới một công việc" class="cursor-pointer" style="size: 32px; text-align: center;line-height: 50px;" @click="handleClickView">+</h2>
        <div class="position-absolute" style="background-color: #fff; width: 250px; z-index: 1;
         box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);top: 55px;" :style="setPropNew" :class="{'d-none': !view}">
            <div class="pt-2 pe-3" style="text-align: right;"><span class="cursor-pointer" @click="handleClickView">Đóng</span></div>
            <div class="m-3">
                <div class="cursor-pointer mb-3 p-2" style="border: 1px dotted #ccc; border-radius: 5px;" @click="handleClickForm(1)">Form 1</div>
                <div class="cursor-pointer mb-3 p-2" style="border: 1px dotted #ccc; border-radius: 5px;" @click="handleClickForm(2)">Form 2</div>
                <div class="cursor-pointer mb-3 p-2" style="border: 1px dotted #ccc; border-radius: 5px;" @click="handleClickForm(3)">Form 3</div>
            </div>
        </div>
    </div>`,
    data: function () {
        return {
            view: false,
        }
    },
    methods: {
        handleClickView: function () {
            this.view = !this.view;
        },
        handleClickForm: function (idForm) {
            this.view = !this.view;
            this.$emit("chose-form", idForm, this.index);
        },
    },
    computed: {
        setPropNew: function () {
            if (this.newIcon) {
                return {"right": "-200px"}
            } else {
                return {"right": "-100px"}
            }
        },
    }
}

export default addTaskIcon;