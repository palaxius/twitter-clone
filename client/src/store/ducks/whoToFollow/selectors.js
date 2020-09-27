import {createSelector} from "reselect";
import {LoadingState} from "../../actionTypes";

export const selectWhoFollow = (state) => state.whoFollow

export const selectLoadingWhoFollowState = (state) => selectWhoFollow(state).loadingState

export const selectIsLoading = (state) => selectLoadingWhoFollowState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingWhoFollowState(state) === LoadingState.LOADED

export const selectWhoFollowItems = createSelector(selectWhoFollow, (whoFollow) => whoFollow.items)
