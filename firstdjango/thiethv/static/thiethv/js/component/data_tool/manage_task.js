import createTask from "./create_task.js";
import addTaskIcon from "./add_task.js";

const manageTask = {
    props: {},
    components: {
        "create-task": createTask,
        "add-task-icon": addTaskIcon,
    },
    data: function () {
        return {
            totalTask: [],
            active: {
                icon: undefined,
                task: undefined,
            },
        }
    },
    template: `
    <div class="d-flex w-100" style="flex-wrap: nowrap;">
        <div class="d-flex ms-3 mb-3">
            <add-task-icon :newIcon="true" @chose-form="emitTypeForm"></add-task-icon>
        </div>  
        <div v-for="item, index in totalTask" class="d-flex ms-3 mb-3" :key="item.key">
            <create-task :typeForm="item.formType"></create-task>
            <add-task-icon :index="index+1" @chose-form="emitTypeForm"></add-task-icon>
        </div>
    </div>`,
    methods: {
        emitTypeForm: function (formId, indexId) {
            const vm = this;
            vm.totalTask.splice(indexId, 0, {formType: formId, key: (new Date()).getTime()});
        },
    }
}

export default manageTask;