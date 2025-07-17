<template>
    <div id="app">
      <h2>Employee Registation</h2>
      <form @submit.prevent="save">

        <div class="form-group">
          <label>Employee name</label>
          <input type="text" v-model="employee.name" class="form-control" placeholder="Employee name">
        </div>

        <div class="form-group">
          <label>Employee Adress</label>
          <input type="text" v-model="epmloyee.phone" class="form-control" placeholder="Mobile">
        </div>

        <button type="submit" class="btn btn-primary">Save</button>

      </form>
  
      <h2>Eployee View</h2>
      <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Eployee Name</th>
          <th scope="col">Adress</th>
          <th scope="col">Mobile</th>
          <th scope="col">Option</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="employee in result" v-bind:key="employee._id">
          <td>{{employee._id}}</td>
          <td>{{employee.name}}</td>
          <td>{{employee.address}}</td>
          <td>{{employee.phone}}</td>
          <td>
            <button type="button" class="btn btn-warning" @click="edit(employee)">Edit</button>
            <button type="button" class="btn btn-danger" @click="remove(employee)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import Vue from 'vue'
  import axios from 'axios'
  
  Vue.use(axios)
  export default {
    name: 'EmployeeCrud',
    data () {
      return {
        result: {},
        employee: {
          _id: '',
          name: '',
          address: '',
          phone: ''
        }
      }
    },
    created () {
      this.EmployeeLoad()
    },
    mounted () {
      console.log('mounted() called!')
    },
    methods: {
      EmployeeLoad () {
        const page = 'http://localhost:3001/user/getAll'
        axios.get(page)
          .then(({data}) => {
            console.log(data)
            this.result = data.data
          })
      },
      save () {
        if (this.employee._id === '') {
          this.saveData()
        } else {
          this.updateData()
        }
      },
      saveData () {
        axios.post('http://localhost:3001/user/create', this.employee)
          .then(({data}) => {
            alert('saved')
            this.EmployeeLoad()
          })
      },
      edit (employee) {
        this.employee = employee
      },
      updateData () {
        const editrecords = 'http://localhost:3001/user/update' + this.employee._id
        axios.patch(editrecords, this.employee)
          .then(({data}) => {
            this.employee.name = ''
            this.employee.address = ''
            this.employee.phone = ''
            this.id = ''
            alert('updated')
            this.EmployeeLoad()
          })
      },
      remove (employee) {
        const url = `http://localhost:3001/user/delete/${employee._id}`
        axios.delete(url)
        alert('deleted')
        this.EmployeeLoad()
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  