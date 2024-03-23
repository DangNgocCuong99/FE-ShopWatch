
export interface IUser  {
    username: string,
    password: string,
    phoneNumber: string,
    email: string,
    address: string,
    status: string,
    otp:string,
    role: string,
    createdAt: number,
    refreshToken:string,
    isActive: boolean
}