<script>
export default {
    
}
</script>

<template>
     <!-- auth-page wrapper -->
        <div class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100">

            <!-- auth-page content -->
            <div class="auth-page-content overflow-hidden p-0">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-xl-4 text-center">
                            <div class="error-500 position-relative">
                                <img src="@/assets/images/error500.png" alt="" class="img-fluid error-500-img error-img" />
                                <h1 class="title text-muted">500</h1>
                            </div>
                            <div>
                                <h4>Internal Server Error!</h4>
                                <p class="text-muted w-75 mx-auto">Server Error 500. We're not exactly sure what happened, but our servers say something is wrong.</p>
                                <router-link to="/" class="btn btn-success"><i class="mdi mdi-home me-1"></i>Back to home</router-link>
                            </div>
                        </div><!-- end col-->
                    </div>
                    <!-- end row -->
                </div>
                <!-- end container -->
            </div>
            <!-- end auth-page content -->
        </div>
        <!-- end auth-page-wrapper -->
</template>