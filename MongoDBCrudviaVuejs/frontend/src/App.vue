<template>
  <div class="mb-3 bg-dark">
    <b-nav>
      <b-nav-item active>Active</b-nav-item>
      <b-nav-item>Link</b-nav-item>
      <b-nav-item v-b-toggle.sidebar-1>Another Link</b-nav-item> 
      <b-sidebar id="sidebar-1" title="Sidebar" shadow>
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
        </div>
      </b-sidebar>
      <b-nav-item disabled>Disabled</b-nav-item>
    </b-nav>
  </div>
    <!-- input gruop -->
<b-container>
  <b-row>
    <b-form @submit="save" v-if="show">

      <b-form-group class="mb-3" id="input-group-2" label="ID:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="employee._id"
          placeholder="Employee ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mb-3" id="input-group-2" label="Employee Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="employee.name"
          placeholder="Employee name"
          required
        ></b-form-input>
      </b-form-group>


      <b-form-group
        id="input-group-1"
        label="Employee address:"
        label-for="input-1"
        class="mb-3"
      >
        <b-form-input
          id="input-1"
          v-model="employee.address"
          placeholder="Employee Adress"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Phone:"
        label-for="input-3"
        class="mb-3"
      >
        <b-form-input
          id="input-1"
          v-model="employee.phone"
          placeholder="Enter phone"
          required
        ></b-form-input>
      </b-form-group>

      
      <b-button class="m-3" type="submit" variant="primary">Save</b-button>

    </b-form>
    <b-card class="mt-3 mb-3" header="Form Data Result">
      <pre class="m-0">{{ employee }}</pre>
    </b-card>
  </b-row>
</b-container>
<!--tablo-->
<b-container>
  <div>
    <b-form-group
      label="Selection mode:"
      label-for="table-select-mode-select"
      label-cols-md="4"
    >
      <b-form-select
        id="table-select-mode-select"
        v-model="selectMode"
        :options="modes"
        class="mb-3"
      ></b-form-select>
    </b-form-group>

    <b-table
    id="my-table"
    :items="myProvider"
    striped
    responsive="sm"
    ref="selectableTable"
    selectable
    :select-mode="selectMode"
    @row-selected="onRowSelected"
    >
    <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <p>
      <b-button variant="warning" class="m-2" size="sm" @click="edit(selected[0])">Edit</b-button>
      <b-button variant="danger" class="m-2" size="sm" @click.prevent="deletE(selected[0])">Delete</b-button>
    </p>
    <p>
      Selected Rows:<br>
      {{ selected }}
    </p>
  </div>
</b-container>
</template>

<script>
import api from './services/api'
  export default {
    data() {
      return {
        result: {},
        employee: {
          _id: '',
          name: '',
          address: '',
          phone: ''
        },
        show: true,
        selectMode: 'single',
        modes: ['multi', 'single', 'range'],
        selected: []
      }
    },
    created() {
      this.myProvider()
    },
    mounted() {
      console.log('mounted called')
    },
    methods: {
      onRowSelected(employee) {
        this.selected = employee
      },
      edit(selected) {
        this.employee._id = selected._id
        this.employee.name = selected.name
        this.employee.address = selected.address
        this.employee.phone = selected.phone
      },
      deletE(selected) {
        const url = `/user/delete/${selected._id}`
        api.delete(url)
        alert('deleted')
        this.myProvider();
      },
      myProvider() {
        const getData = api.get('/user/getAll')
        return getData.then(data => {
          const items = data.data.data
          return items || []
        })     
      },
      save(event) {
        event.preventDefault()
        if(this.employee._id === ''){
          this.saveData()
        }else {
          this.updateData()
        }
      },
      async saveData() {
        try{
          await api.post('/user/create', this.employee)
          this.employee._id = ''
          this.employee.name = ''
          this.employee.address = ''
          this.employee.phone = ''
          this.myProvider()
          alert('saved')
        }catch(error){
          console.error(error)
        }
      },
      async updateData() {
        try {
          const editData = `/user/update/${this.employee._id}`
          api.patch(editData, this.employee)
          this.employee._id = ''
          this.employee.name = ''
          this.employee.address = ''
          this.employee.phone = ''
          alert('updated')
          this.myProvider()
        } catch (error) {
          
        }
      }  
    }
  }
</script>
