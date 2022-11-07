import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { ref, computed, onMounted, onUnmounted } from 'vue'
// import firebase from 'firebase/compat/app';
// import firebaseConfig from './firebaseConfig'
import 'firebase/compat/firestore';

export const getUserState = () =>
new Promise((resolve, reject) =>
  onAuthStateChanged(getAuth(), resolve, reject)
)

export const useAuthState = () => {
const user = ref(null)
const error = ref(null)

const auth = getAuth()
let unsubscribe
onMounted(() => {
  unsubscribe = onAuthStateChanged(
    auth,
    u => (user.value = u),
    e => (error.value = e)
  )
})
onUnmounted(() => unsubscribe())

const isAuthenticated = computed(() => user.value != null)

return { user, error, isAuthenticated }
}