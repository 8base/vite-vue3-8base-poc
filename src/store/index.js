/**
 * The state manager should manage communication
 * with the API for query and subscriptions.
 */
 import { createStore } from 'vuex'
 
 import session from "./modules/session";
 
 /**
  * Exports configured Vuex store
  */
 export default createStore({
   modules: {
     session
   }
 });