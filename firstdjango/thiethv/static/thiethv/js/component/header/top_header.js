const vmTopHeader = {
    props: {},
    template: `
    <div class="position-fixed w-100" style="height: 56px; z-index: 10; background-color: #fff; box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);">
    <div class="container d-flex justify-content-between align-items-center" style="height: 100%;">
        <a><h5>Home</h5></a>
        <div class="row">
            <div class="col"><a> chuc nang 1 </a></div>
            <div class="col"><a> chuc nang 2 </a></div>
            <div class="col"><a> chuc nang 3 </a></div>
        </div>
    </div></div>`,
    data: function () {
        return {}
    },
}

export default vmTopHeader;