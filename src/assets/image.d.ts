declare module "*.svg" {
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const url: string;
  export default url;
}

declare module "*.gif" {
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const url: string;
  export default url;
}
