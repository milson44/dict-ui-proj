export interface RegistryFormRequestBody {
  query?: string; // Выражение
  dictId?: string; // идентификатор справочника
  name?: string; // наименование отчетной формы
  construction?: boolean; // флаг построения реестра
  editable?: boolean; // флаг построения реестра
  receiveOrganizationIds?: string[]; // идентификаторы организаций, допущенные ко внесению данных
  changeOrganizationIds?: string[]; // идентификаторы организаций, допущенные к получению всех данных
  deleted?: boolean; // Признак удаления формы
}

export interface UnionField extends Field, RegistryFormField {
  newName?: string;
}

export interface FieldValue {
  [id: string]: string | number | Date | MultipleValues | null;
}

export type MultipleValues = string[] | number[] | Date[] | null[];

export interface DictData {
  id?: string;
  name: string;
  engine?: 'mongo' | 'postgres';
  fields: Field[];
  enums?: Enum[];
  viewPermission: string;
  editPermission: string;
  deleted?: string;
}

export interface Enum {
  id: string;
  name: string;
  values: string[];
}

export interface DictNote {
  id: string;
  data: DictNoteData;
  history: DictNoteData[];
  version: number;
  created: string;
  updated: string;
  deleted: string;
}

export interface Column {
  name: string; // Имя колонки
  sortField?: string; // Наименование поля для сортировки
  width?: number; // Ширина колонки
  widthMax?: string;
  order?: number; // Порядок колонки
  position?: string;
  type?: string;
  checked?: boolean; // для kgh-table-columns-config
  permissions?: string[];
  dictId: keyof LoadedData;
}

export type AllLoadedData = AllDictsData & {
  files?: AttachmentInfoResponseData[];
};
export type LoadedData = {
  regions?: { [id: string]: Region };
  districts?: { [id: string]: District };
  incidentSystem?: { [id: string]: { [system: string]: { name: string } } };
  organizations?: { [id: string]: Organization };
  users?: { [id: string]: { id: string; name: string } };
  posts?: { [id: string]: Post };
  MKD?: { [id: string]: KghObject };
  YARD?: { [id: string]: KghObject };
  ODH?: { [id: string]: KghObject };
  carTypes?: { [id: string]: { id: string; name: string } };
  files?: { [id: string]: AttachmentInfoResponseData };
};

export type TypeOfLoadedData =
  | Region
  | District
  | Organization
  | Post
  | KghObject
  | AttachmentInfoResponseData
  | { id: string; name: string }
  | { [system: string]: { name: string } }
  | null;
interface RegistryFormField {
  fieldId: string; // идентификатор поля
  fieldType: string; // тип поля
  textFieldType?: string | null; // тип текстового поля
  indicatorId?: string | null; // идентификатор показателя
  dictId: string | null; // идентификатор справочника
}

interface Field {
  id?: string;
  name: string;
  type: string;
  dictRef: DictRef;
  enumId: string;
  multivalued: boolean;
  required: boolean;
  minSize: number;
  maxSize: number;
}
interface DictRef {
  dictId: string;
  fieldId: string;
}
interface AllDictsData {
  incidentSystem?: { [system: string]: { name: string } };
  regions?: Region[];
  carTypes?: { id: string; name: string }[];
  districts?: District[];
  users?: { id: string; name: string }[];
  organizations?: Organization[];
  posts?: Post[];
  MKD?: KghObject[];
  YARD?: KghObject[];
  ODH?: KghObject[];
}
interface DictNoteData {
  [id: string]: string | number | Date | MultipleValues;
}

interface AttachmentInfoResponseData {
  bindings: AttachmentBindingData[];
  created: string;
  fileName: string;
  id: string;
  mimeType: string;
  size: number;
  url: string;
  userId: string;
}
interface AttachmentBindingData {
  attachmentId: string;
  created: string;
  objectId: string;
  type: string;
  userId: string;
}
interface Region {
  cameraCount: number;
  code: string;
  criticalIncidentCount: number;
  districts: District[];
  id: string;
  name: string;
  notCriticalIncidentCount: number;
  objectCount: number;
  objectType: string;
  maxLat: number;
  maxLon: number;
  minLat: number;
  minLon: number;
}
interface District {
  altName: string;
  cameraCount: number;
  code: string;
  criticalIncidentCount: number;
  id: string;
  kod: string;
  name: string;
  notCriticalIncidentCount: number;
  objectCount: number;
  region_name?: string;
}
interface Organization {
  bankName: string;
  bik: string; // БИК
  chiefFio: string;
  chiefPost: string;
  deleted: string; // Дата удаления организации в системе (ISOString)
  districtIds: string[]; // Идентификаторы районов
  email: string;
  fax: string; // Факс
  id: string; // Идентификатор организации
  inn: string;
  kpp: string;
  ks: string;
  legalAddress: string; // Адрес
  name: string; // Полное название
  ogrn: string; // ОГРН
  okpo: string; // ОКПО
  parentId: string; // Идентификатор вышестоящей организации
  phone: string; // Телефон
  postAddress: string;
  rs: string;
  shortName: string; // Краткое название
  system: string; // Ститема "KGH"/"ODS_2"...
  type: OrganizationType; // Тип организации
  userId: string; // Идентификатор пользователя (Ответственный сотрудник)

  // sites: string[]; // Участки ??????
  // role: string; // Индентификатор роли ответственного сотрудника ?????????
  // roleName: string; // Наименование роли ответственного сотрудника ?????????
}
enum OrganizationType {
  CONTRACTOR = 'CONTRACTOR',
  CUSTOMER = 'CUSTOMER',
  MANAGEMENT_COMPANY = 'MANAGEMENT_COMPANY'
}
interface KghObject {
  address: string;
  addressBti: AddressBti[];
  created: string;
  elementsUpdated: string;
  criticalIncidentIds?: string[];
  deleted: boolean;
  district: string;
  districtIds: string[];
  externalId: string;
  hasOrders: boolean;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  notCriticalIncidentIds: string[];
  number: number;
  objectType: string;
  ownerId: string;
  parentId: string;
  properties: {
    [key: string]: any;
  };
  passport: {
    [key: string]: string;
  };
  attributes?: IKghObjectAttribute;
  region: string;
  system: string;
  type: string;
}
interface IKghObjectAttribute {
  description: string;
  address: string;
}
interface AddressBti {
  id: string;
  unad: number;
  unom: number;
  address: string;
  region: string;
  district: string;
}
interface Post {
  deleted: boolean; // Удалены ли должности из источника
  description: string; // Описание
  id: string; // Код должности
  name: string; // Наименование
}
interface UserResponseData {
  id: string;
  login: string;
  type: string;
  role: string;
  canLogin: boolean;
  canRead: boolean;
  canWrite: boolean;
  post: Post;
  blocked: string;
  blockReason: string;
  deleted: string;
  deleteReason: string;
  email: string;
  appointPasswordEmail: string;
  appointPasswordEmailActive: boolean;
  passwordAppointed: boolean;
  existedFrom: string | Date;
  existedTo: string | Date;
  firstName: string;
  lastName: string;
  middleName: string;
  organization: Organization;
  passwordExpiration: string;
  sentAppointPasswordEmail: string;
  verified: boolean;
  superuser: boolean;
  sitesIds?: string[];
  districtIds: string[];
  permissions: string[];
  lastLogin: string;
  activeShift?: boolean; // активна ли смена у пользователя
  permissionsSet?: Set<string>; // TODO: этого поля нет в UserDto
  probationEnd?: string; // TODO: этого поля нет в UserDto
  site?: string; // TODO: этого поля нет в UserDto
}
