import {storeLoginUser} from "@/store";
import {ACTION_CHECK_TOKEN} from "@/store/typeActions";
import {RouteLocationNormalized} from "vue-router";


export default async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
    if (to.name !== 'login' && !storeLoginUser.getters['HAS_TOKEN']) {
        try {
            console.log(storeLoginUser.getters['HAS_TOKEN'])
            await storeLoginUser.dispatch(ACTION_CHECK_TOKEN)
            await next({name: to.name})
        } catch (err) {
            await next({name: 'login'})
        }
    } else {
        if (to.name === 'login' && await storeLoginUser.getters['HAS_TOKEN']) {
            console.log(storeLoginUser.getters['HAS_TOKEN'])
            await next({name: 'MapHome'})
        } else {
            await next()
        }
    }
}
