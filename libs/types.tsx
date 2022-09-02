export type ErrorsType = Record<string,string[]>

export type LoadingType = Record<string,boolean>

export type ElementType = {
    title : string,
    value: string,
    images?: string[] 
}

export const elementDefault = {
    title :"",
    value: ""
}

