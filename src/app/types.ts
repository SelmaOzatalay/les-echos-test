export type Newsletter = {
    id: string
    image: string
    description: string
    title: string
    site: string
    subscriptions: Array<string>
    userCanSubscribe?: boolean
}

export type User = {
    id: string
    firstName: string
    lastName: string
    gender:string
    email: string
    subscriptions: Array<string>
}