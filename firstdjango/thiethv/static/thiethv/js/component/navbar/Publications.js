const Publications = {
    components: {},
    template: `
    <div class="container">
        <div>
            <div class="row" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div>Search Terms</div>
                <div class="col-sm-3 p-2">
                    <select class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>
                </div>
                <div class="col-sm-5 p-2">
                    <input class="form-control" type="text">
                </div>
                <div class="col-sm-4 p-2">
                    <select class="form-control-sm">
                        <option disabled value="">Please select one</option>
                        <option>AND</option>
                        <option>OR</option>
                        <option>NOT</option>
                    </select>
                </div>
            </div>
            <div class="row" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div class="col-sm-3 p-2">
                    <select class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>
                </div>
                <div class="col-sm-5 p-2">
                    <input class="form-control" type="text">
                </div>
                <div class="col-sm-4 p-2">
                    <select class="form-control-sm">
                        <option disabled value="">Please select one</option>
                        <option>AND</option>
                        <option>OR</option>
                        <option>NOT</option>
                    </select>
                </div>
            </div>
            <div class="row" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div class="col-sm-3 p-2">
                    <select class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>
                </div>
                <div class="col-sm-5 p-2">
                    <input class="form-control" type="text">
                </div>
                <div class="col-sm-4 p-2">
                    <select class="form-control-sm">
                        <option disabled value="">Please select one</option>
                        <option>AND</option>
                        <option>OR</option>
                        <option>NOT</option>
                    </select>
                </div>
            </div>
            <div class="row" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div class="col-sm-3 p-2">
                    <select class="form-control">
                        <option disabled value="">Please select one</option>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>
                </div>
                <div class="col-sm-5 p-2">
                    <input class="form-control" type="text">
                </div>
            </div>
        </div>
        <div class="d-md-flex d-sm-block" style="gap: 10px;">
            <div class="p-3" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div>Time Frame</div>
                <div class="py-2">
                    <input type="radio">
                    <label>Entire Database</label>
                </div>
                <div class="py-2">
                    <input type="radio">
                    <label>
                        <div class="d-flex justify-content-between pe-3">
                            <span>Year Range: &nbsp</span>
                            <input style="width: 54px" placeholder="Từ" type="number">
                            <span>&nbsp - &nbsp</span>
                            <input style="width: 54px" placeholder="Đến" type="number">
                        </div>
                    </label>
                </div>
            </div>
            <div class="p-3" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div>Publication Type</div>
                <div>
                    <div class="py-2">
                        <input type="radio">
                        <label>All</label>
                    </div>
                    <div class="py-2"><input type="radio">
                        <label>Books</label></div>
                    <div class="py-2"><input type="radio">
                        <label>Journals</label></div>
                    <div class="py-2"><input type="radio">
                        <label>Proceedings</label></div>
                </div>
            </div>
            <div class="p-3" style="border-bottom: 1px solid rgba(0,0,0,.09);">
                <div>Review Format</div>
                <div>
                    <div class="py-2"><input type="radio">
                        <label>PDF</label></div>
                    <div class="py-2"><input type="radio">
                        <label>HTML</label></div>
                </div>
            </div>
        </div>
        <div class="mt-3">
            <button class="btn btn btn-danger">Clear</button>
            <button class="btn btn-primary">Search</button>
        </div>
    </div>`,
    props: {
    },
    methods: {
    },
}

export default Publications;