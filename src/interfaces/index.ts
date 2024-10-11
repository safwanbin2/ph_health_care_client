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
  data: any[];
};
