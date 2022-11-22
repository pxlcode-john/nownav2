// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "products",
    columns: [
      { name: "title", type: "string", notNull: true, defaultValue: " " },
      { name: "location", type: "link", link: { table: "locations" } },
      { name: "html", type: "text", notNull: true, defaultValue: " " },
      { name: "seller", type: "link", link: { table: "user_sellers" } },
      { name: "slug", type: "string", unique: true },
    ],
  },
  { name: "orders", columns: [] },
  { name: "sellers", columns: [{ name: "name", type: "string" }] },
  {
    name: "locations",
    columns: [
      { name: "geolocation", type: "string", notNull: true, defaultValue: " " },
      { name: "name", type: "string", notNull: true, defaultValue: " " },
    ],
  },
  { name: "customers", columns: [] },
  { name: "influencers", columns: [] },
  {
    name: "users",
    columns: [
      { name: "name", type: "string" },
      { name: "firstname", type: "string" },
      { name: "lastname", type: "string" },
    ],
  },
  {
    name: "variants",
    columns: [
      { name: "product", type: "link", link: { table: "products" } },
      { name: "price", type: "float", notNull: true, defaultValue: "0" },
      { name: "name", type: "string", notNull: true, defaultValue: " " },
      { name: "avatar", type: "link", link: { table: "resources" } },
    ],
  },
  { name: "categories", columns: [] },
  {
    name: "resources",
    columns: [
      { name: "name", type: "string", notNull: true, defaultValue: " " },
      { name: "url", type: "text", notNull: true, defaultValue: " " },
      { name: "resourceType", type: "link", link: { table: "resource_types" } },
    ],
  },
  {
    name: "resource_types",
    columns: [{ name: "type", type: "string", unique: true }],
  },
  {
    name: "product_images",
    columns: [
      { name: "product", type: "link", link: { table: "products" } },
      { name: "resource", type: "link", link: { table: "resources" } },
    ],
  },
  {
    name: "contacts",
    columns: [
      { name: "email", type: "string" },
      { name: "mobile", type: "string" },
    ],
  },
  {
    name: "user_contacts",
    columns: [
      { name: "user", type: "link", link: { table: "users" } },
      { name: "contact", type: "link", link: { table: "contacts" } },
      { name: "primary", type: "bool", defaultValue: "false" },
    ],
  },
  {
    name: "customer_contacts",
    columns: [
      { name: "contact", type: "link", link: { table: "contacts" } },
      { name: "primary", type: "bool", defaultValue: "false" },
    ],
  },
  {
    name: "address_classifications",
    columns: [
      { name: "psgc", type: "int" },
      { name: "name", type: "string" },
      { name: "code", type: "int" },
      { name: "level", type: "string" },
      { name: "oldName", type: "string" },
      { name: "cityClass", type: "string" },
      { name: "status", type: "string" },
    ],
  },
  {
    name: "user_sellers",
    columns: [
      { name: "user", type: "link", link: { table: "users" } },
      { name: "seller", type: "link", link: { table: "sellers" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Products = InferredTypes["products"];
export type ProductsRecord = Products & XataRecord;

export type Orders = InferredTypes["orders"];
export type OrdersRecord = Orders & XataRecord;

export type Sellers = InferredTypes["sellers"];
export type SellersRecord = Sellers & XataRecord;

export type Locations = InferredTypes["locations"];
export type LocationsRecord = Locations & XataRecord;

export type Customers = InferredTypes["customers"];
export type CustomersRecord = Customers & XataRecord;

export type Influencers = InferredTypes["influencers"];
export type InfluencersRecord = Influencers & XataRecord;

export type Users = InferredTypes["users"];
export type UsersRecord = Users & XataRecord;

export type Variants = InferredTypes["variants"];
export type VariantsRecord = Variants & XataRecord;

export type Categories = InferredTypes["categories"];
export type CategoriesRecord = Categories & XataRecord;

export type Resources = InferredTypes["resources"];
export type ResourcesRecord = Resources & XataRecord;

export type ResourceTypes = InferredTypes["resource_types"];
export type ResourceTypesRecord = ResourceTypes & XataRecord;

export type ProductImages = InferredTypes["product_images"];
export type ProductImagesRecord = ProductImages & XataRecord;

export type Contacts = InferredTypes["contacts"];
export type ContactsRecord = Contacts & XataRecord;

export type UserContacts = InferredTypes["user_contacts"];
export type UserContactsRecord = UserContacts & XataRecord;

export type CustomerContacts = InferredTypes["customer_contacts"];
export type CustomerContactsRecord = CustomerContacts & XataRecord;

export type AddressClassifications = InferredTypes["address_classifications"];
export type AddressClassificationsRecord = AddressClassifications & XataRecord;

export type UserSellers = InferredTypes["user_sellers"];
export type UserSellersRecord = UserSellers & XataRecord;

export type DatabaseSchema = {
  products: ProductsRecord;
  orders: OrdersRecord;
  sellers: SellersRecord;
  locations: LocationsRecord;
  customers: CustomersRecord;
  influencers: InfluencersRecord;
  users: UsersRecord;
  variants: VariantsRecord;
  categories: CategoriesRecord;
  resources: ResourcesRecord;
  resource_types: ResourceTypesRecord;
  product_images: ProductImagesRecord;
  contacts: ContactsRecord;
  user_contacts: UserContactsRecord;
  customer_contacts: CustomerContactsRecord;
  address_classifications: AddressClassificationsRecord;
  user_sellers: UserSellersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Unexus-7ctnbi.us-east-1.xata.sh/db/nowna",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
