


export interface ILogin {
    username: string,
    password: string
}

export interface IAuthProvider {
    user: ILogin | null,
    signIn: (newUser: ILogin, callBack: () => void) => void
    signOut: (callBack: () => void) => void
}