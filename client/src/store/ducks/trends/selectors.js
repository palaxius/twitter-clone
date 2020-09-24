import {createSelector} from "reselect";
import {LoadingState} from "../../types";

export const selectTrends = (state) => state.trends

export const selectLoadingTrendsState = (state) => selectTrends(state).loadingState

export const selectIsLoading = (state) => selectLoadingTrendsState(state) === LoadingState.LOADING

export const selectIsLoaded = (state) => selectLoadingTrendsState(state) === LoadingState.LOADED

export const selectTrendsItems = createSelector(selectTrends, (trends) => trends.items)
