const state = {
    menuItems: {},
}

const getters = {
    getMenuItems: state => state.menuItems,

}

const mutations = {
    setMenuItems(state, data) {
        state.menuItems = data;
    },
    // 将匹配到的对象，在menuItems数组中删除
    removeMenuItems(state, data) {
        state.menuItems.forEach((item, index) => {
            if (item == data) {
                state.menuItems.splice(index, 1);
            }

        });

    },
    // 将新添加的食物push到menuItems属性中
    pushToMenuItems(state, data) {
        state.menuItems.push(data);
    }
}

const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}