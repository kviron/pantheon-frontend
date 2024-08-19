declare module '*.scss' {
    interface IClassNames {
        [className: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';

type DeepPartial<T> = T extends object
    ? {
          [P in keyof T]?: DeepPartial<T[P]>;
      }
    : T;

type OptionalRecord<K extends keyof any, T> = {
    [P in K]?: T;
};

type Nullable<T> = T | null;
type NotRequired<T> = T | undefined;
type UUID = string;

type NumericRange<
    START extends number,
    END extends number,
    ARR extends unknown[] = [],
    ACC extends number = never,
> = ARR['length'] extends END
    ? ACC | START | END
    : NumericRange<START, END, [...ARR, 1], ARR[START] extends undefined ? ACC : ACC | ARR['length']>;

type ArrayElementType<T> = T extends (infer E)[] ? E : never;

type NestedKeys<T, P extends string = ''> = T extends object
    ? {
          [K in keyof T]-?: `${P extends '' ? '' : `${P}.`}${K}${NestedKeys<T[K], `${P extends '' ? '' : `${P}.`}${K}`>}`;
      }[keyof T]
    : '';

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
    T extends object
        ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
        : ''
) extends infer D
    ? Extract<D, string>
    : never;
