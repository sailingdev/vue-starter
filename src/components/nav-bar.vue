<template lang="en">
<header id="page-topbar">
    <div class="layout-width">
        <div class="navbar-header">
            <div class="d-flex">
                <!-- LOGO -->
                <div class="navbar-brand-box horizontal-logo">
                    <router-link to="/" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/images/logo-dark.png" alt="" height="17" />
                        </span>
                    </router-link>

                    <router-link to="/" class="logo logo-light">
                        <span class="logo-sm">
                            <img src="@/assets/images/logo-sm.png" alt="" height="22" />
                        </span>
                        <span class="logo-lg">
                            <img src="@/assets/images/logo-light.png" alt="" height="17" />
                        </span>
                    </router-link>
                </div>

                <button type="button" class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                    <span class="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                <!-- App Search-->
                <form class="app-search d-none d-md-block">
                    <div class="position-relative">
                        <input type="text" class="form-control" placeholder="Search..." autocomplete="off" id="search-options" value="" />
                        <span class="mdi mdi-magnify search-widget-icon"></span>
                        <span class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none" id="search-close-options"></span>
                    </div>
                </form>
            </div>

            <div class="d-flex align-items-center">
                <div class="dropdown ms-1 topbar-head-dropdown header-item">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img id="header-lang-img" src="@/assets/images/flags/us.svg" alt="Header Language" height="20" class="rounded" />
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <a href="javascript:void(0);" v-for="(entry, i) in languages" :key="`Lang${i}`" :value="entry" @click="setLanguage(entry.language, entry.title, entry.flag)" :class="{ active: lan === entry.language }" class="dropdown-item notify-item language py-2" data-lang="en" title="English">
                            <img :src="entry.flag" alt="user-image" class="me-2 rounded" height="18" />
                            <span class="align-middle">{{ entry.title }}</span>
                        </a>
                    </div>
                </div>

                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen" @click="initFullScreen">
                        <i class="bx bx-fullscreen fs-22"></i>
                    </button>
                </div>

                <div class="ms-1 header-item d-none d-sm-flex">
                    <button type="button" class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode" @click="toggleDarkMode">
                        <i class="bx bx-moon fs-22"></i>
                    </button>
                </div>

                <div class="dropdown ms-sm-3 header-item topbar-user">
                    <button type="button" class="btn" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="d-flex align-items-center">
                            <img class="rounded-circle header-profile-user" src="@/assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                            <span class="text-start ms-xl-2">
                                <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                                <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span>
                            </span>
                        </span>
                    </button>

                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <h6 class="dropdown-header">Welcome Anna!</h6>
                        <router-link class="dropdown-item" to="/pages/profile"><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
                            <span class="align-middle">Profile</span></router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/auth/logout-basic"><i class="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                            <span class="align-middle" data-key="t-logout">Logout</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import i18n from "../i18n";

/**
 * Nav-bar Component
 */
export default {
    data() {
        return {
            languages: [{
                    flag: require("@/assets/images/flags/us.svg"),
                    language: "en",
                    title: "English",
                },
                {
                    flag: require("@/assets/images/flags/french.svg"),
                    language: "fr",
                    title: "French",
                },
                {
                    flag: require("@/assets/images/flags/spain.svg"),
                    language: "sp",
                    title: "Spanish",
                },
                {
                    flag: require("@/assets/images/flags/china.svg"),
                    language: "ch",
                    title: "Chinese",
                },
                {
                    flag: require("@/assets/images/flags/germany.svg"),
                    language: "gr",
                    title: "Deutsche",
                },
                {
                    flag: require("@/assets/images/flags/russia.svg"),
                    language: "ru",
                    title: "русский",
                },
            ],
            lan: i18n.locale,
            text: null,
            flag: null,
            value: null,
            myVar: 1,
        };
    },
    components: {},

    methods: {
        isCustomDropdown() {
            //Search bar
            var searchOptions = document.getElementById("search-close-options");
            var dropdown = document.getElementById("search-dropdown");
            var searchInput = document.getElementById("search-options");

            searchInput.addEventListener("focus", () => {
                var inputLength = searchInput.value.length;
                if (inputLength > 0) {
                    dropdown.classList.add("show");
                    searchOptions.classList.remove("d-none");
                } else {
                    dropdown.classList.remove("show");
                    searchOptions.classList.add("d-none");
                }
            });

            searchInput.addEventListener("keyup", () => {
                var inputLength = searchInput.value.length;
                if (inputLength > 0) {
                    dropdown.classList.add("show");
                    searchOptions.classList.remove("d-none");
                } else {
                    dropdown.classList.remove("show");
                    searchOptions.classList.add("d-none");
                }
            });

            searchOptions.addEventListener("click", () => {
                searchInput.value = "";
                dropdown.classList.remove("show");
                searchOptions.classList.add("d-none");
            });

            document.body.addEventListener("click", (e) => {
                if (e.target.getAttribute("id") !== "search-options") {
                    dropdown.classList.remove("show");
                    searchOptions.classList.add("d-none");
                }
            });
        },
        toggleHamburgerMenu() {
            var windowSize = document.documentElement.clientWidth;

            if (windowSize > 767)
                document.querySelector(".hamburger-icon").classList.toggle("open");

            //For collapse horizontal menu
            if (document.documentElement.getAttribute("data-layout") === "horizontal") {
                document.body.classList.contains("menu") ?
                    document.body.classList.remove("menu") :
                    document.body.classList.add("menu");
            }

            //For collapse vertical menu
            if (document.documentElement.getAttribute("data-layout") === "vertical") {
                if (windowSize < 1025 && windowSize > 767) {
                    document.body.classList.remove("vertical-sidebar-enable");
                    document.documentElement.getAttribute("data-sidebar-size") == "sm" ?
                        document.documentElement.setAttribute("data-sidebar-size", "") :
                        document.documentElement.setAttribute("data-sidebar-size", "sm");
                } else if (windowSize > 1025) {
                    document.body.classList.remove("vertical-sidebar-enable");
                    document.documentElement.getAttribute("data-sidebar-size") == "lg" ?
                        document.documentElement.setAttribute("data-sidebar-size", "sm") :
                        document.documentElement.setAttribute("data-sidebar-size", "lg");
                } else if (windowSize <= 767) {
                    document.body.classList.add("vertical-sidebar-enable");
                    document.documentElement.setAttribute("data-sidebar-size", "lg");
                }
            }

            //Two column menu
            if (document.documentElement.getAttribute("data-layout") == "twocolumn") {
                document.body.classList.contains("twocolumn-panel") ?
                    document.body.classList.remove("twocolumn-panel") :
                    document.body.classList.add("twocolumn-panel");
            }
        },
        toggleMenu() {
            this.$parent.toggleMenu();
        },
        toggleRightSidebar() {
            this.$parent.toggleRightSidebar();
        },
        initFullScreen() {
            document.body.classList.toggle("fullscreen-enable");
            if (!document.fullscreenElement &&
                /* alternative standard method */
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement
            ) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }
        },
        setLanguage(locale, country, flag) {
            this.lan = locale;
            this.text = country;
            this.flag = flag;
            document.getElementById("header-lang-img").setAttribute("src", flag);
            i18n.global.locale = locale;
        },
        toggleDarkMode() {
            if (document.documentElement.getAttribute("data-layout-mode") == "dark") {
                document.documentElement.setAttribute("data-layout-mode", "light");
            } else {
                document.documentElement.setAttribute("data-layout-mode", "dark");
            }
        },
    },
    computed: {},
    mounted() {
        document.addEventListener("scroll", function () {
            var pageTopbar = document.getElementById("page-topbar");
            if (pageTopbar) {
                document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ?
                    pageTopbar.classList.add("topbar-shadow") :
                    pageTopbar.classList.remove("topbar-shadow");
            }
        });
        if (document.getElementById("topnav-hamburger-icon"))
            document
            .getElementById("topnav-hamburger-icon")
            .addEventListener("click", this.toggleHamburgerMenu);

        this.isCustomDropdown();
    },
};
</script>
