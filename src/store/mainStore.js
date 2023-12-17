import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export const useAppStore = defineStore('main', () => {
    const router = ref(useRouter());
    const isHideNav = ref(false);

    //Для скрытия nav-меню при переходе на однук из страниц
    function hideNav() {
        router.value.currentRoute.name !== undefined ? isHideNav.value = true : isHideNav.value = false;
    }
    //Watcher, который отслеживает имя роута
    watch(() => router, () => hideNav(), {deep: true});

    return { isHideNav, hideNav }
})