export class Reservation {
  _id?: string;
  volRef!: object;
  numPassenger!: {
    adult?: number,
    child?: number,
    baby?: number
  };
  classe!: string;
  createdAt?: Date;
  updatedAt?: Date;
}
