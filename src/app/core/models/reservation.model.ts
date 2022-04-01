export interface reservationType {
  _id?: string;
  volRef: string;
  userRef: string;
  numPassenger: {
    adult?: number,
    child?: number,
    baby?: number
  },
  classe: string,
  createdAt?: Date,
  updatedAt?: Date,
}

export class Reservation {
  status?: string;
  message?: string;
  payload!: Array<reservationType>;
  
}
