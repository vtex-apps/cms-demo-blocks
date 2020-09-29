declare module '*.css' {
  interface CssClasses {
    [cssClass: string]: string
  }

  const content: CssClasses

  export default content
}
