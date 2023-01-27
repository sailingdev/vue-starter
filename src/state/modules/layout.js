export const state = {
  layoutType: 'horizontal',
  layoutWidth: 'fluid',
  sidebarSize: 'lg',
  topbar: 'dark',
  mode: 'light',
  position: 'fixed',
  sidebarView: 'default',
  sidebarColor: 'dark'
}

export const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  CHANGE_SIDEBAR_TYPE(state, sidebarSize) {
    state.sidebarSize = sidebarSize;
  },
  CHANGE_TOPBAR(state, topbar) {
    state.topbar = topbar;
  },
  CHANGE_MODE(state, mode) {
    state.mode = mode;
  },
  CHANGE_POSITION(state, position) {
    state.position = position;
  },
  CHANGE_SIDEBAR_VIEW(state, sidebarView) {
    state.sidebarView = sidebarView;
  },
  CHANGE_SIDEBAR_COLOR(state, sidebarColor) {
    state.sidebarColor = sidebarColor;
  },
}

export const actions = {
  changeLayoutType({ commit }, { layoutType }) {
    commit('CHANGE_LAYOUT', layoutType);
    document.body.removeAttribute("style");
  },

  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit('CHANGE_LAYOUT_WIDTH', layoutWidth)
  },

  changeSidebarSize({ commit }, { sidebarSize }) {
    commit('CHANGE_SIDEBAR_TYPE', sidebarSize)
  },

  changeTopbar({ commit }, { topbar }) {
    commit('CHANGE_TOPBAR', topbar)
  },

  changeMode({ commit }, { mode }) {
    commit('CHANGE_MODE', mode)
  },

  changePosition({ commit }, { position }) {
    commit('CHANGE_POSITION', position)
  },

  changeSidebarView({ commit }, { sidebarView }) {
    commit('CHANGE_SIDEBAR_VIEW', sidebarView)
  },

  changeSidebarColor({ commit }, { sidebarColor }) {
    commit('CHANGE_SIDEBAR_COLOR', sidebarColor)
  }
}
