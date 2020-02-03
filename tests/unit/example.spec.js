import {mount} from '@vue/test-utils'
import App from '@/src/App.vue'
import { AgGridVue } from 'ag-grid-vue';

let component = null;
let agGridVue = null;

const ensureGridApiHasBeenSet = (component) => {
    return new Promise(function (resolve, reject) {
        (function waitForGridReady() {

            // we need to wait for the gridReady event before we can start interacting with the grid
            // in this case we're looking at the api property in our App component, but it could be anything (ie a boolean flag)
            if (component.vm.gridApi) {

                // once our condition has been met we can start the tests
                return resolve();
            }
            console.log(component.vm.gridApi)

            // not set - wait a bit longer
            setTimeout(waitForGridReady, 10);
        })();
    });
};

beforeEach((done) => {
    component = mount(App);
    agGridVue = component.vm;

    // don't start our tests until the grid is ready
    // it doesn't take long for the grid to initialise, but it is some finite amount of time after the component is ready
    ensureGridApiHasBeenSet(component).then(() => done());
});

afterEach(() => {
    component.destroy();
    agGridVue = null;
})


describe('app.js', ()=>{
    it('all rows selected', () => {
        expect(agGridVue.gridApi.getSelectedRows().length).toEqual(0);

    // simulate a user clicking on the select all button
    component.find('#selectAll').trigger('click', {
        // no actual event data is needed for this particular event/use case
    });

    expect(agGridVue.gridApi.getSelectedRows().length).toEqual(3)
    });

    it('all rows deselected', () => {
        agGridVue.gridApi.selectAll();

    // simulate a user clicking on the select all button
    component.find('#deselectAll').trigger('click', {
        // no actual event data is needed for this particular event/use case
    });

    expect(agGridVue.gridApi.getSelectedRows().length).toEqual(0)
    });

})