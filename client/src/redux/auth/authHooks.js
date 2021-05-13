//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxService';

const useAuth = getConnectedStore('auth');
const useAuthAction = getConnectedActionHook();
const useAuthEmptyAction = getConnectedEmptyActionHook();

const authHooks = { useAuth, useAuthAction, useAuthEmptyAction };

export default authHooks;
