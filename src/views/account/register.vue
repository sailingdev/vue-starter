<script>
  import {
    required,
    email,
    helpers
  } from "@vuelidate/validators";
  import useVuelidate from "@vuelidate/core";
  import axios from 'axios';
  import appConfig from "../../../app.config";

  export default {
    setup() {
      return {
        v$: useVuelidate()
      };
    },
    page: {
      title: "Register",
      meta: [{
        name: "description",
        content: appConfig.description,
      }, ],
    },
    components: {},
    data() {
      return {
        user: {
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        },
        submitted: false,
        regError: null,
        tryingToRegister: false,
        isRegisterError: false,
        registerSuccess: false,
      };
    },
    validations: {
      user: {
        username: {
          required: helpers.withMessage("Username is required", required),
        },
        email: {
          required: helpers.withMessage("Email is required", required),
          email: helpers.withMessage("Please enter valid email", email),
        },
        password: {
          required: helpers.withMessage("Password is required", required),
        },
        confirm_password: {
          required: helpers.withMessage("Confirm Password is required", required),
        },
      },
    },
    computed: {
      notification() {
        return this.$store ? this.$store.state.notification : null;
      },
    },
    methods: {


      // Try to register the user in with the email, username
      // and password they provided.
      async tryToRegisterIn() {
        this.submitted = true;
        // stop here if form is invalid
        this.v$.$touch();
        const result = await axios.post('https://api-node.themesbrand.website/auth/signup', {
          email: this.user.email,
          password: this.user.password,
          confirm_password: this.user.confirm_password
        })
        console.log(result.data.status)
        if (result.data.status == 'errors') {
          this.isRegisterError = true
          return this.regError = result.data.message;
        }
        localStorage.setItem('jwt', result.data.token)
        this.$router.push({
          path: '/'
        });

      },
    },
  }
</script>

<template>
  <div class="auth-page-wrapper pt-5">
    <!-- auth page bg -->
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>

      <div class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <!-- auth page content -->
    <div class="auth-page-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <router-link to="/" class="d-inline-block auth-logo">
                  <img src="@/assets/images/logo-light.png" alt="" height="20">
                </router-link>
              </div>
              <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6 col-xl-5">
            <div class="card mt-4">

              <div class="card-body p-4">
                <div class="text-center mt-2">
                  <h5 class="text-primary">Create New Account</h5>
                  <p class="text-muted">Get your free velzon account now</p>
                </div>
                <div class="p-2 mt-4">
                  <form class="needs-validation" @submit.prevent="tryToRegisterIn">
                    <b-alert v-model="registerSuccess" class="mt-3" variant="success" dismissible>Registration
                      successfull.</b-alert>

                    <b-alert v-model="isRegisterError" class="mt-3" variant="danger" dismissible>{{ regError }}
                    </b-alert>

                    <div v-if="notification.message" :class="'alert ' + notification.type">
                      {{ notification.message }}
                    </div>
                    <div class="mb-3">
                      <label for="useremail" class="form-label">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" v-model="user.email" id="useremail" :class="{
                    'is-invalid': submitted && v$.user.email.$error,
                  }" placeholder="Enter email address">
                      <div v-for="(item, index) in v$.user.email.$errors" :key="index" class="invalid-feedback">
                        <span v-if="item.$message">{{ item.$message }}</span>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label">Username <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" v-model="user.username" :class="{
                    'is-invalid': submitted && v$.user.username.$error,
                  }" id="username" placeholder="Enter username">
                      <div v-if="submitted && v$.user.username.$error" class="invalid-feedback">
                        <span v-if="v$.user.username.required.$message">{{
                    v$.user.username.required.$message
                  }}</span>
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="userpassword" class="form-label">Password <span class="text-danger">*</span></label>
                      <input type="password" class="form-control" v-model="user.password" :class="{
                    'is-invalid': submitted && v$.user.password.$error,
                  }" id="userpassword" placeholder="Enter password">
                      <div v-if="submitted && v$.user.password.$error" class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{
                    v$.user.password.required.$message
                  }}</span>
                      </div>
                    </div>

                    <div class="mb-2">
                      <label for="userpassword" class="form-label">Confirm Password <span
                          class="text-danger">*</span></label>
                      <input type="password" class="form-control" v-model="user.confirm_password" :class="{
                    'is-invalid': submitted && v$.user.password.$error,
                  }" id="userconfirmpassword" placeholder="Enter password">
                      <div v-if="submitted && v$.user.confirm_password.$error" class="invalid-feedback">
                        <span v-if="v$.user.password.required.$message">{{
                    v$.user.confirm_password.required.$message
                  }}</span>
                      </div>
                    </div>

                    <div class="mb-4">
                      <p class="mb-0 fs-12 text-muted fst-italic">By registering you agree to the Velzon <a href="#"
                          class="text-primary text-decoration-underline fst-normal fw-medium">Terms of Use</a></p>
                    </div>

                    <div class="mt-4">
                      <button class="btn btn-success w-100" type="submit">Sign Up</button>
                    </div>

                    <div class="mt-4 text-center">
                      <div class="signin-other-title">
                        <h5 class="fs-13 mb-4 title text-muted">Create account with</h5>
                      </div>

                      
                    </div>
                  </form>

                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="mt-4 text-center">
              <p class="mb-0">Already have an account ? <router-link to="/login"
                  class="fw-semibold text-primary text-decoration-underline"> Signin </router-link>
              </p>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </div>
    <!-- end auth page content -->
  </div>
  <!-- end auth-page-wrapper -->
</template>