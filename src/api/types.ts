export interface IDemoParams {
  userName: string
  passWord: string | number
}

export interface IDemoApi {
  demo: (params: IDemoParams) => Promise<any>
}
