export interface User {
    _id: string;
    role: string;
    isVerified: boolean;
    phone: number;
    otp: string | null;
    otpExpiresAt: string | null;
    isOtpVarified: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    accessToken: string;
    email: string;
    name: string;
    profilePicture: string;
    addressline1: string;
    addressline2?: string; // Optional field
    city: string;
    dob: string; //
}