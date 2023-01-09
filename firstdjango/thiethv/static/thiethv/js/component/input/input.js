const inputValidated = {
    props: {
        name: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: "text",
        },
        label: {
            type: String,
            default: '',
        },
        placeholder: {
            type: String,
            default: '',
        },
        validation: {
            type: Boolean,
            default: false,
        },
    },
    template: `<div class="w-100">
        <span style="font-size: 14px; font-weight: bold; text-transform: capitalize; opacity: 0.7; margin-left: 3px;">{{label}}</span>
        <div class="position-relative">
            <input ref="input" :name="name" :class="{'is-invalid': issue}" class="w-100 ps-3 py-2 form-control" :type="changType" :placeholder="placeholder"
            @change="handleChange" v-model="dataChange">
            <i class="position-absolute d-flex align-items-center h-100" style="right: 10px; top: 0;"
            v-if="type == 'password'" :class="classShowPass" @click="handleShowPass"></i>
        </div>
        <div class="m-1" style="color: red; font-size: 12px;">{{issue}}</div>
    </div>`,
    data: function () {
        return {
            issue: '',
            dataChange: null,
            showPassword: false,
        }
    },
    methods: {
        handleChange: function ($event) {
            const vm = this;
            if (vm.validation) {
                vm.handleValidation();
            }
            vm.$emit('change', vm.dataChange);
        },
        handleValidation: function () {
            const vm = this;
            if (!vm.dataChange) {
                vm.issue = 'Không để trống trường này!';
                vm.$refs.input.focus();
                return;
            } else {
                vm.issue = '';
            }
            switch (vm.type) {
                case 'text':
                    // code block
                    break;
                case 'number':
                    // code block
                    break;
                case 'email':
                    if (!vm.validateEmail(vm.dataChange)) {
                        vm.issue = 'Email không hợp lệ!';
                    } else {
                        vm.issue = '';
                    }
                    break;
                case 'password':
                    vm.validatePassword();
                    break;
                default:
                // code block
            }
        },
        validateEmail: function (email) {
            let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        },
        validatePassword: function () {
            const vm = this;
            // Validate length
            if (vm.dataChange.length < 8) {
                vm.issue = 'Mật khẩu chứa tối thiểu 8 kí tự!'
                return;
            }
            // Validate lowercase letters
            const lowerCaseLetters = /[a-z]/g;
            if (!vm.dataChange.match(lowerCaseLetters)) {
                vm.issue = 'Mật khẩu chứa tối thiểu 1 chữ thường!'
                return;
            }
            // Validate capital letters
            const upperCaseLetters = /[A-Z]/g;
            if (!vm.dataChange.match(upperCaseLetters)) {
                vm.issue = 'Mật khẩu chứa tối thiểu 1 chữ in hoa!'
                return;
            }
            // Validate special character
            const specialCharacter = /([!,%,&,@,#,$,^,*,?,_,~])/;
            if (!vm.dataChange.match(specialCharacter)) {
                vm.issue = 'Mật khẩu chứa tối thiểu 1 kí tự đặc biệt!'
                return;
            }
        },
        handleShowPass: function () {
            this.showPassword = !this.showPassword;
        },
    },
    computed: {
        classShowPass: function () {
            if (this.showPassword) {
                return 'bi bi-eye-slash-fill';
            } else {
                return 'bi bi-eye-fill';
            }
        },
        changType: function () {
            const vm = this;
            if (this.type === 'password') {
                if (vm.showPassword) {
                    return 'text';
                } else {
                    return 'password';
                }
            } else {
                return vm.type;
            }
        },
    },
}

export default inputValidated;