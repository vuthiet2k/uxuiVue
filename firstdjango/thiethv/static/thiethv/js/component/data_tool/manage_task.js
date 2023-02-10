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
        }
    },
    template: `
    <div class="d-flex w-100" style="flex-wrap: nowrap;">
        <div class="d-flex ms-3 mb-3">
            <add-task-icon :newIcon="true" @chose-form="emitTyprForm"></add-task-icon>
        </div>  
        <div v-for="item, index in totalTask" class="d-flex ms-3 mb-3" :key="index">
            <create-task></create-task>
            <add-task-icon></add-task-icon>
        </div>
    </div>`,
    methods: {
        emitTyprForm: function (id) {
            this.totalTask.push(id);
        },
    }
}

export default manageTask;