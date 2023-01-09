const loadingData = {
    props: {
        loading: {
            type: Boolean,
            default: true,
        }
    },
    template: `
    <div v-if="loading" class="spinner-box-loading-data">
    <div class="three-quarter-spinner-loading-data"></div>
    </div>`,
};

export default loadingData;