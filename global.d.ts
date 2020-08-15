declare module '*.svg' {
    type a = import('react').FunctionComponent<import('react').SVGProps<SVGElement>>;
    const dog: a;
    export default dog;
}
