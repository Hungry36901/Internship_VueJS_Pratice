<template>
  <div>
      <h1>Form</h1>
      <!-- form v-on:Click="submit" -->
      <form v-on:submit.prevent="submit">
          <!-- Firstname -->
          <div>
              <label for="first_name">Firstname</label>
              <input type="text" name="first_name" v-model.trim="applicant.first_name">
          </div>
          <!-- Lastname -->
          <div>
              <label for="last_name">Lastname</label>
              <input type="text" name="last_name" v-model.lazy="applicant.last_name">
          </div>
          <!-- Age -->
          <div>
              <label for="age">Age</label>
              <input type="number" v-model.number="applicant.age">
          </div>
          <!-- Sex -->
          <div>
              <label for="sex">Male</label>
              <input type="radio" name="sex" value="male" v-model="applicant.sex">
              <label for="sex">Female</label>
              <input type="radio" name="sex" value="female" v-model="applicant.sex">
          </div>
          <!-- Courses -->
          <div>
              <select name="course" v-model="applicant.course" >
                  <option value="react">React</option>
                  <option value="augular">Augular</option>
                  <option value="vueJS">VueJS</option>
              </select>
          </div>
          <button type="button" @click.exact="clear()" @click.alt="defaultSet()">Clear</button>
          <button type="submit" @click="submit()">Submit</button>
      </form>
      <div class="applicant" style="margin-top: 16px ; color: red">
          #Spy {{ JSON.stringify(applicant) }}
      </div>
  </div>
</template>

<script>
export default {
    name:" FormView" ,data() {
        return {
            applicant: {
                first_name : "",
                last_name : "",
                age: 0,
                sex: "",
                course: "",
            },
        }
    },methods: {
        clear(){
            this.applicant = {
                first_name : "",
                last_name : "",
                age: 0,
                sex: "",
                course: "",
            }
        },
        submit(){
            event.preventDefault();
            alert(JSON.stringify(this.applicant))
        },
        defaultSet(){
            this.applicant = {
                first_name : "DEFAULT",
                last_name : "DEFAULT",
                age: 0,
                sex: "",
                course: "",
            }
        },
    },
}
</script>

<style>

</style>