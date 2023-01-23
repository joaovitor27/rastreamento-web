import {IUser} from "@/interfaces/IUser";
import {createStore, Store} from "vuex";
import {InjectionKey} from "vue";

interface userLogin {
    user: IUser
}

export const key: InjectionKey<Store<userLogin>> = Symbol()

export const store = createStore<userLogin>({
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
