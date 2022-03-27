export const state = {
    token: ""
}

export const mutations = {
    setToken(state, token) {
        state.token = token;
    }
}


export const actions = {
    nuxtServerInit(store) {
        console.log("nuxtserver");
        store.commit("setToken", 'abc123')
    }
}