//Redux Custom Hooks
import {
	getConnectedStore,
	getConnectedActionHook,
	getConnectedEmptyActionHook,
} from 'services/reduxService';

const useUser = getConnectedStore('user');
const useUserAction = getConnectedActionHook();
const useUserEmptyAction = getConnectedEmptyActionHook();

const userHooks = { useUser, useUserAction, useUserEmptyAction };

export default userHooks;
