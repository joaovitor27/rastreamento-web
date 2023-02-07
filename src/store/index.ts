import {IUser} from "@/interfaces/IUser";
import {ILogin, ILoginUser} from "@/interfaces/ILoginUser";
import {createStore, Store, useStore} from "vuex";
import {InjectionKey} from "vue";
import api from "@/http";
import {SET_TOKEN, SET_USER} from "./typeMutations";
import {
    ACTION_CHECK_TOKEN,
    ACTION_SIGNOUT,
    ACTIONS_LOAD_SESSION,
    ACTIONS_LOGIN,
    ACTIONS_SET_TOKEN,
    ACTIONS_SET_USER
} from "@/store/typeActions";
import {deleteLocalToken, getLocalToken, setHeaderToken, setLocalToken} from "@/store/storage";

interface User {
    user: IUser
}

export const key: InjectionKey<Store<User>> = Symbol()

export const store = createStore<User>({
    state: {
        user:
            {
                id: 1,
                nickname: 'joaovitor',
                cpf: '069.242.903-45',
                full_name: 'João Vitor da Silva Monteiro',
                cell_phone: '86995880950',
                email: 'joaovitor.monteiro.188@gmail.com'
            },

    }
})

export function perfilStore(): Store<User> {
    return useStore(key)
}


interface LoginUser {
    loginUser: ILoginUser
}

export const keyLoginUser: InjectionKey<Store<LoginUser>> = Symbol()

export const storeLoginUser = createStore<LoginUser>({
    state: {
        loginUser: {
            token: '',
            user: {
                id: -1,
                cpf: '',
                full_name: '',
                nickname: '',
                cell_phone: '',
                email: '',
            }
        }
    },
    mutations: {
        [SET_USER](state, data: IUser) {
            state.loginUser.user = data
        },
        [SET_TOKEN](state, data: string) {
            state.loginUser.token = data
        }
    },
    actions: {
        async [ACTIONS_SET_USER]({commit}, payload: IUser) {
            await commit(SET_USER, payload)
        },
        async [ACTIONS_LOGIN]({commit}, payload: ILogin) {
            await api.post('/login', payload).then(async response => {
                console.log('aqui ' + payload)
                await localStorage.setItem('token', response.data['access_token'])
                await setLocalToken(response.data['access_token'])
                await setHeaderToken(response.data['access_token'])
                await commit(SET_TOKEN, response.data['access_token'])
            })
        },
        async [ACTION_CHECK_TOKEN]({dispatch, state}) {
            if (state.loginUser.token) {
                return Promise.resolve(state.loginUser.token)
            }
            const token = getLocalToken()

            if (!token) {
                return Promise.reject(new Error('Token Inválido'))
            }
            await dispatch(ACTIONS_SET_TOKEN, token)
            return await dispatch(ACTIONS_LOAD_SESSION)
        },
        async [ACTIONS_LOAD_SESSION]({dispatch}) {
            // eslint-disable-next-line no-async-promise-executor
            return new Promise<void>(async (resolve, reject) => {
                try {
                    console.log(api.defaults.headers)
                    const data: IUser = await api.get('/user', {
                        headers: {
                            'Authorization': `Bearer ${getLocalToken()}`
                        }
                    })
                    await dispatch(ACTIONS_SET_USER, data)
                    await resolve()
                } catch (err) {
                    await ('ACTION_SIGNOUT')
                    await reject()
                }
            })
        },
        async [ACTION_SIGNOUT]({dispatch}) {
            await setHeaderToken('')
            await deleteLocalToken()
            await dispatch(ACTIONS_SET_USER, {})
            await dispatch(ACTIONS_SET_TOKEN, '')
        }
    },
    getters: {
        ['HAS_TOKEN']({loginUser}) {
            !!loginUser.token
        }
    }
})

export function loginUserStore(): Store<LoginUser> {
    return useStore(keyLoginUser)
}
