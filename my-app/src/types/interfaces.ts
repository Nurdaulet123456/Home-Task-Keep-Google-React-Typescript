export interface INavList {
    id: number,
    name: string, 
    icon: any, 
    route?: string
}

export interface INotes {
    [key: string]: string
}

export interface ILabel extends INotes {}