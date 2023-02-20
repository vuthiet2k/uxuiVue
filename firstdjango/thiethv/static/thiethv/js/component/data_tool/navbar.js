const NavbarDataTool = {
    template: `
    <div class="w-100 h-100">
        <div class="position-fixed ps-2 d-none d-xl-block"
             style="margin-top: 56px; width: 220px; background-color: #fff;box-shadow: 2px -2px 2px 0px #ccc; top: 0; bottom: 0; left: 0; overflow-y: scroll;">
            <ul class="mt-2 p-1">
                <a href="">
                    <li class="nav__asana d-flex align-items-center p-2" style="height: 40px; gap: 15px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                        </svg>
                        Trang chủ
                    </li>
                </a>
                <a href="">
                    <li class="nav__asana d-flex align-items-center p-2" style="height: 40px; gap: 15px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path d="M2.146 3.146a.5.5 0 0 1 .708 0l.823.824a.75.75 0 0 1 0 1.06l-.823.824a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708ZM4 6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 6Zm6.354-2.854a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 1 0 .708.708l.823-.824a.75.75 0 0 0 0-1.06l-.823-.824ZM12 5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
                            <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2H2Zm6.5 0v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5Z"/>
                        </svg>
                        Task
                    </li>
                </a>
                <a href="">
                    <li class="nav__asana d-flex align-items-center p-2" style="height: 40px; gap: 15px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        </svg>
                        Job
                    </li>
                </a>
            </ul>
        </div>
        <div class="position-fixed d-none d-md-block d-xl-none"
             style="margin-top: 56px; width: 72px; background-color: #fff;box-shadow: 2px -2px 2px 0px #ccc; top: 0; bottom: 0; left: 0;">
            <ul class="h-100 w-100">
                <a href="">
                    <li class="nav__asana d-flex justify-content-center" style="padding-top: 16px; padding-bottom: 14px;">
                        <div style="width: 64px; height: 44px; text-align: center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                            </svg>
                            <span class="d-block" style="font-size: 10px;">Trang chủ</span>
                        </div>
                    </li>
                </a>
                <a href="">
                    <li class="nav__asana d-flex justify-content-center" style="padding-top: 16px; padding-bottom: 14px;">
                        <div style="width: 64px; height: 44px; text-align: center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M2.146 3.146a.5.5 0 0 1 .708 0l.823.824a.75.75 0 0 1 0 1.06l-.823.824a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708ZM4 6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 4 6Zm6.354-2.854a.5.5 0 0 0-.708.708l.647.646-.647.646a.5.5 0 1 0 .708.708l.823-.824a.75.75 0 0 0 0-1.06l-.823-.824ZM12 5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
                                <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5.5V2H2Zm6.5 0v12H14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H8.5Z"/>
                            </svg>
                            <span class="d-block" style="font-size: 10px;">Task</span>
                        </div>
                    </li>
                </a>
                <a href="">
                    <li class="nav__asana d-flex justify-content-center" style="padding-top: 16px; padding-bottom: 14px;">
                        <div style="width: 64px; height: 44px; text-align: center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                            </svg>
                            <span class="d-block" style="font-size: 10px;">Job</span>
                        </div>
                    </li>
                </a>
            </ul>
        </div>
        <div class="position-fixed p-3 d-flex d-md-none"
             style="height: 56px; background-color: #fff;box-shadow: 0 -2px 2px -2px #ccc;bottom: 0;left: 0; right: 0;">
            <ul class="row h-100 w-100">
                <a class="col" href="">
                    <li>Icon</li>
                </a>
                <a class="col" href="">
                    <li>Icon</li>
                </a>
                <a class="col" href="">
                    <li>Icon</li>
                </a>
            </ul>
        </div>
    </div>`,
    data: function () {
        return {}
    },
    methods: {},
}

export default NavbarDataTool;