declare module "*.svg" {
	const content: any;
	export default content;
}

declare module "*.png" {
	const content: any;
	export default content;
}

declare module '*.module.scss' {
    const styles: {[index: string]: string};
    export default styles;
}

declare interface Properties {
    id?: string;
    className?: string;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
