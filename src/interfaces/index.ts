export type TSpecialty = {
  id: string;
  title: string;
  icon: string;
  doctors?: any[];
};

export type TResponse = {
  success: boolean;
  message: string;
  statusCode: number;
  meta?: {
    total: number;
    page: number;
    limit: number;
  };
  data: any[];
};

export type TDoctor = {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: string;
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  user: any;
  averageRating: number;
  appointments?: [];
  schedules?: [];
  prescription?: {};
  review?: [];
};
