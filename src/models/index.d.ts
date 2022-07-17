import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Against {
  USER = "USER",
  TRIP = "TRIP",
  LISTING = "LISTING",
  FEEDBACK = "FEEDBACK",
  REVIEW = "REVIEW",
  ACCIDENT = "ACCIDENT"
}

export enum FuelType {
  PREMIUM = "PREMIUM",
  REGULAR = "REGULAR",
  ETHANOL = "ETHANOL",
  ELECTRIC = "ELECTRIC",
  DIESEL = "DIESEL"
}

export enum VehicleType {
  SPORTS = "SPORTS",
  LUXURY = "LUXURY",
  SUV = "SUV",
  SEDAN = "SEDAN",
  UTE = "UTE",
  VAN = "VAN"
}

export declare class ApiKeys {
  readonly stripeKey: string;
  readonly googleKey: string;
  constructor(init: ModelInit<ApiKeys>);
}

export declare class PrepPictures {
  readonly pictures: string[];
  readonly odometerReading: number;
  readonly damageDescription?: string | null;
  constructor(init: ModelInit<PrepPictures>);
}

export declare class VehicleInfo {
  readonly type: VehicleType | keyof typeof VehicleType;
  readonly year: number;
  readonly make: string;
  readonly model: string;
  readonly seats: number;
  readonly fuel: FuelType | keyof typeof FuelType;
  readonly isElectric: boolean;
  readonly isDiesel: boolean;
  readonly isManual: boolean;
  constructor(init: ModelInit<VehicleInfo>);
}

type EmailListMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReportReviewMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type MessageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TripMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ListingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EmailList {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly phoneNumber: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EmailList, EmailListMetaData>);
  static copyOf(source: EmailList, mutator: (draft: MutableModel<EmailList, EmailListMetaData>) => MutableModel<EmailList, EmailListMetaData> | void): EmailList;
}

export declare class ReportReview {
  readonly id: string;
  readonly message: string;
  readonly against: Against | keyof typeof Against;
  readonly againstID: string;
  readonly userID: string;
  readonly rating?: number | null;
  readonly pictures?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ReportReview, ReportReviewMetaData>);
  static copyOf(source: ReportReview, mutator: (draft: MutableModel<ReportReview, ReportReviewMetaData>) => MutableModel<ReportReview, ReportReviewMetaData> | void): ReportReview;
}

export declare class Message {
  readonly id: string;
  readonly message: string;
  readonly tripID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Message, MessageMetaData>);
  static copyOf(source: Message, mutator: (draft: MutableModel<Message, MessageMetaData>) => MutableModel<Message, MessageMetaData> | void): Message;
}

export declare class Trip {
  readonly id: string;
  readonly startDate: string;
  readonly endDate: string;
  readonly totalPrice: number;
  readonly currentLatitude: number;
  readonly currentLongitude: number;
  readonly hostACCEPTED: boolean;
  readonly hostCleaned: boolean;
  readonly hostUploadedBefore: boolean;
  readonly hostGavekeys: boolean;
  readonly userRecievedkeys: boolean;
  readonly userUploadedBefore: boolean;
  readonly userFinishedUsingCar: boolean;
  readonly userCleaned: boolean;
  readonly userUploadedAfter: boolean;
  readonly userGaveBackkeys: boolean;
  readonly hostRecievedBackkeys: boolean;
  readonly hostUploadedAfter: boolean;
  readonly userENDED: boolean;
  readonly hostENDED: boolean;
  readonly listingID: string;
  readonly hostID: string;
  readonly userID: string;
  readonly listingPicture: string;
  readonly userBeforePics: PrepPictures;
  readonly userAfterPics: PrepPictures;
  readonly hostBeforePics: PrepPictures;
  readonly hostAfterPics: PrepPictures;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Trip, TripMetaData>);
  static copyOf(source: Trip, mutator: (draft: MutableModel<Trip, TripMetaData>) => MutableModel<Trip, TripMetaData> | void): Trip;
}

export declare class Listing {
  readonly id: string;
  readonly isAvailable: boolean;
  readonly isVarified: boolean;
  readonly pricePerDay: number;
  readonly picture: string;
  readonly originArea: string;
  readonly originLatitude: number;
  readonly originLongitude: number;
  readonly description?: string | null;
  readonly info: VehicleInfo;
  readonly numberOfTrips: number;
  readonly licencePlate: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Listing, ListingMetaData>);
  static copyOf(source: Listing, mutator: (draft: MutableModel<Listing, ListingMetaData>) => MutableModel<Listing, ListingMetaData> | void): Listing;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly picture: string;
  readonly isAhost?: boolean | null;
  readonly Listings?: (Listing | null)[] | null;
  readonly isVarified?: boolean | null;
  readonly Messages?: (Message | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}