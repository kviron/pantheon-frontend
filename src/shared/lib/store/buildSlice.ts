import {
    bindActionCreators,
    CaseReducerActions,
    createSlice,
    CreateSliceOptions,
    Slice,
    SliceCaseReducers,
    SliceSelectors,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

type SliceCustom<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
    ReducerPath extends string = Name,
    Selectors extends SliceSelectors<State> = SliceSelectors<State>,
> = Slice<State, CaseReducers, Name, ReducerPath, Selectors> & {
    useActions: () => CaseReducerActions<CaseReducers, Name>;
};

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
    ReducerPath extends string = Name,
    Selectors extends SliceSelectors<State> = SliceSelectors<State>,
>(
    options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>,
): SliceCustom<State, CaseReducers, Name, ReducerPath, Selectors> {
    const slice = createSlice(options);

    const useActions = (): CaseReducerActions<CaseReducers, Name> => {
        const dispatch = useDispatch();

        return useMemo(() => bindActionCreators(slice.actions, dispatch), [dispatch]);
    };

    return {
        ...slice,
        useActions,
    };
}
