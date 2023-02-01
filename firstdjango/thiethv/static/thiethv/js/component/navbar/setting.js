const SettingNavBar = {
    components: {},
    template: `<div class="detail__item--wrapper" :class="{'navbar__detail--show': show}">
    <div class="position-relative">
    <div class="px-3 d-flex justify-content-between align-items-center" style="height: 48px; border-bottom: 1px solid #ccc;">
    <b style="white-space: nowrap;">Cài đặt</b> <i class="bi bi-backspace" @click="hanldeClose"></i></div>
    <div class="p-3" style="min-width: 360px;overflow-x: hidden; overflow-y: scroll;">Hiding elements
For faster mobile-friendly development, use responsive display classes for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.

To hide elements simply use the .d-none class or one of the .d-{sm,md,lg,xl}-none classes for any responsive screen variation.

To show an element only on a given interval of screen sizes you can combine one .d-*-none class with a .d-*-* class, for example .d-none .d-md-block .d-xl-none will hide the element for all screen sizes except on medium and large devices.

</div></div>
    </div>`,
    props: {
        show: {
            type: Boolean,
            required: true,
        }
    },
    methods: {
        hanldeClose: function () {
            this.$emit('close')
        }
    },
}

export default SettingNavBar;