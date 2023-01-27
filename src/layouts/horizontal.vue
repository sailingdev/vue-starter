<template>
    <div>
        <div id="layout-wrapper">
            <NavBar />
            <!-- ========== App Menu ========== -->
            <div class="app-menu navbar-menu">
                <!-- LOGO -->
                <div class="navbar-brand-box">
                    <!-- Dark Logo-->
                    <router-link to="/" class="logo logo-dark">
                        <span class="logo-sm">
                      <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                        <span class="logo-lg">
                      <img src="@/assets/images/logo-dark.png" alt="" height="17" />
                    </span>
                    </router-link>
                    <!-- Light Logo-->
                    <router-link to="/" class="logo logo-light">
                        <span class="logo-sm">
                      <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                        <span class="logo-lg">
                      <img src="@/assets/images/logo-light.png" alt="" height="17" />
                    </span>
                    </router-link>
                    <button type="button" class="
                      btn btn-sm
                      p-0
                      fs-20
                      header-item
                      float-end
                      btn-vertical-sm-hover
                    " id="vertical-hover">
                    <i class="ri-record-circle-line"></i>
                  </button>
                </div>
                <!-- Left Sidebar End -->
                <!-- Vertical Overlay-->
                <div class="vertical-overlay"></div>
            </div>
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->
    
            <div class="container-fluid">
                <div class="row">
                   <div class="alert alert-primary" role="alert">
                  A simple Primary alert with
                    <a href="#" class="alert-link"> an example link </a>. Give
                    it a click if you like.
                  </div>
                </div>  
            </div>

            <div class="main-content">
                <div class="page-content">
                    <!-- Start Content-->
                    <div class="container-fluid">
                        <slot />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>


<script>
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";

export default {
    watch: {
        $route: {
            handler: "onRoutechange",
            immediate: true,
            deep: true,
        },
    },
    methods: {
        onRoutechange(ele) {
            this.initActiveMenu(ele.path);
        },
        initActiveMenu(ele) {
            setTimeout(() => {
                if (document.querySelector("#navbar-nav")) {
                    let a = document
                        .querySelector("#navbar-nav")
                        .querySelector('[href="' + ele + '"]');

                    if (a) {
                        a.classList.add("active");
                        let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
                        if (parentCollapseDiv) {
                            parentCollapseDiv.classList.add("show");
                            parentCollapseDiv.parentElement.children[0].classList.add(
                                "active"
                            );
                            parentCollapseDiv.parentElement.children[0].setAttribute(
                                "aria-expanded",
                                "true"
                            );
                            if (
                                parentCollapseDiv.parentElement.closest(
                                    ".collapse.menu-dropdown"
                                )
                            ) {
                                parentCollapseDiv.parentElement
                                    .closest(".collapse")
                                    .classList.add("show");
                                if (
                                    parentCollapseDiv.parentElement.closest(".collapse")
                                    .previousElementSibling
                                )
                                    parentCollapseDiv.parentElement
                                    .closest(".collapse")
                                    .previousElementSibling.classList.add("active");
                            }
                        }
                    }
                }
            }, 1000);
        },
    },
    components: {
        NavBar,
        Footer
    },
};
</script>