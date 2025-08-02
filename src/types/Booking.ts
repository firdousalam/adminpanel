import { User } from  './user';

export interface CustomerBillingDetails {
    therapist: {
        consultancyFee: number;
        specialization: string;
    };
    featuresBillingDetails: Array<{
        itemNames: string;
        unitPrice: number;
        quantity: number;
        totalPrice: number;
        paymentStatus: string;
        _id: string;
    }>;
    grandTotal: number;
    paymentHistory: Array<{
        date: string;
        amount: number;
        modeOfPayment: string;
        receiptNo: Array<string>;
        _id: string;
    }>;
    paymentStatus: string;
    pendingAmount: number;
    discount?: number; // Optional field
    discountReason?: string; // Optional field
}



export type Booking = {
  _id: string;
  patientId: User;
  therapistId: User;
  appointmentDate: string;
  status: string;
  consultationMode ?: string;
  customerBillingDetails? : CustomerBillingDetails;
  notes?: string; // Optional field
  createdAt: string;
  updatedAt: string;
};