// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Against = {
  "USER": "USER",
  "TRIP": "TRIP",
  "LISTING": "LISTING",
  "FEEDBACK": "FEEDBACK",
  "REVIEW": "REVIEW",
  "ACCIDENT": "ACCIDENT"
};

const FuelType = {
  "PREMIUM": "PREMIUM",
  "REGULAR": "REGULAR",
  "ETHANOL": "ETHANOL",
  "ELECTRIC": "ELECTRIC",
  "DIESEL": "DIESEL"
};

const VehicleType = {
  "SPORTS": "SPORTS",
  "LUXURY": "LUXURY",
  "SUV": "SUV",
  "SEDAN": "SEDAN",
  "UTE": "UTE",
  "VAN": "VAN"
};

const { EmailList, ReportReview, Message, Trip, Listing, User, ApiKeys, PrepPictures, VehicleInfo } = initSchema(schema);

export {
  EmailList,
  ReportReview,
  Message,
  Trip,
  Listing,
  User,
  Against,
  FuelType,
  VehicleType,
  ApiKeys,
  PrepPictures,
  VehicleInfo
};