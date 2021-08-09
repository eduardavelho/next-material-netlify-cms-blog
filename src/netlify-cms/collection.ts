import slugify from "slug";
import {
  CmsCollectionFile,
  CmsCollection,
  CmsFieldItems,
  GetCmsFieldArguments,
  InferCmsFieldItems,
  FieldArguments,
  GetCmsField,
} from "./collection-types";

export type { GetCollectionType } from "./collection-types";

export function itemsToCmsFields<Items>(items: CmsFieldItems<Items>) {
  return Object.keys(items).map((key) => items[key as keyof Items]()(key));
}

function string<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
}: GetCmsFieldArguments<string, Arguments>): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "string",
  });
}

function hidden({
  label,
  defaultValue,
  required,
}: GetCmsFieldArguments<string, "withDefault">): GetCmsField<
  string,
  "withDefault"
> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "hidden",
  });
}

function text<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
}: GetCmsFieldArguments<string, Arguments>): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "text",
  });
}

function number<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  min,
  max,
  step,
  valueType,
}: GetCmsFieldArguments<number, Arguments> & {
  min?: number;
  max?: number;
  step?: number;
  valueType: "int" | "float";
}): GetCmsField<number, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "number",
    min,
    max,
    step,
    value_type: valueType,
  });
}

function color<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  allowInput = false,
  enableAlpha = false,
}: GetCmsFieldArguments<string, Arguments> & {
  allowInput?: boolean;
  enableAlpha?: boolean;
}): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    allowInput,
    enableAlpha,
    default: defaultValue,
    widget: "color",
  });
}

function boolean({
  label,
  required,
  defaultValue,
}: GetCmsFieldArguments<boolean, "withDefault">): GetCmsField<
  boolean,
  "withDefault"
> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "boolean",
  });
}

function selectMany<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  options,
  min,
  max,
}: GetCmsFieldArguments<string[], Arguments> & {
  options: { label: string; value: string }[];
  min?: number;
  max?: number;
}): GetCmsField<string[], Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    options,
    min,
    max,
    multiple: true,
    default: defaultValue,
    widget: "select",
  });
}

function selectOne<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  options,
}: GetCmsFieldArguments<string[], Arguments> & {
  options: { label: string; value: string }[];
}): GetCmsField<string[], Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    options,
    multiple: false,
    default: defaultValue,
    widget: "select",
  });
}

function image<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  chooseUrl,
  mediaFolder,
}: GetCmsFieldArguments<string, Arguments> & {
  chooseUrl?: boolean;
  mediaFolder?: string;
}): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    allow_multiple: false,
    media_folder: mediaFolder,
    choose_url: chooseUrl,
    default: defaultValue,
    widget: "image",
  });
}

function images<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  chooseUrl,
  mediaFolder,
}: GetCmsFieldArguments<string, Arguments> & {
  chooseUrl?: boolean;
  mediaFolder?: string;
}): GetCmsField<string[], Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    allow_multiple: true,
    choose_url: chooseUrl,
    media_folder: mediaFolder,
    default: defaultValue,
    widget: "image",
    media_library: {
      config: {
        multiple: true,
      },
    } as any,
  });
}

function file<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  chooseUrl,
  mediaFolder,
}: GetCmsFieldArguments<string, Arguments> & {
  chooseUrl?: boolean;
  mediaFolder?: string;
}): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    allow_multiple: false,
    media_folder: mediaFolder,
    choose_url: chooseUrl,
    default: defaultValue,
    widget: "file",
  });
}

function files<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  chooseUrl,
  mediaFolder,
}: GetCmsFieldArguments<string, Arguments> & {
  chooseUrl?: boolean;
  mediaFolder?: string;
}): GetCmsField<string[], Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    allow_multiple: true,
    choose_url: chooseUrl,
    media_folder: mediaFolder,
    default: defaultValue,
    widget: "file",
    media_library: {
      config: {
        multiple: true,
      },
    } as any,
  });
}

function keywords({
  label,
  required,
  min,
  max,
  allowAdd = false,
}: GetCmsFieldArguments<string[], "required"> & {
  min: number;
  max: number;
  allowAdd?: boolean;
}): GetCmsField<string[], "required"> {
  return () => (name) => ({
    name,
    label,
    required,
    min,
    max,
    allow_add: allowAdd,
    widget: "list",
  });
}

function datetime<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
  dateFormat,
  timeFormat,
}: GetCmsFieldArguments<string, Arguments> & {
  dateFormat: string;
  timeFormat: string;
}): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    date_format: dateFormat,
    time_format: timeFormat,
    widget: "datetime",
  });
}

function markdown<Arguments extends FieldArguments = "required">({
  label,
  required,
  defaultValue,
}: GetCmsFieldArguments<string, Arguments>): GetCmsField<string, Arguments> {
  return () => (name) => ({
    name,
    label,
    required,
    default: defaultValue,
    widget: "markdown",
  });
}

function list({
  label,
  required,
  labelSingular,
  summary,
  collapsed = false,
}: GetCmsFieldArguments<undefined, "required"> & {
  labelSingular: string;
  summary: string;
  collapsed?: boolean;
}) {
  return {
    fields<Items extends CmsFieldItems<Items>>(
      items: Items
    ): GetCmsField<InferCmsFieldItems<Items>, "required"> {
      const fields = itemsToCmsFields(items);

      return () => (name) => ({
        name,
        label,
        summary,
        collapsed,
        required,
        fields,
        label_singular: labelSingular,
        widget: "list",
      });
    },
  };
}

const fieldsObject = {
  string,
  text,
  boolean,
  color,
  datetime,
  file,
  files,
  hidden,
  markdown,
  keywords,
  number,
  selectMany,
  selectOne,
  image,
  images,
  list,
};

export function collectionFiles({
  label,
  collections,
}: {
  label: string;
  collections: {
    collectionFile: CmsCollectionFile;
  }[];
}) {
  return {
    name: slugify(label),
    label,
    format: "json",
    files: collections.map(({ collectionFile }) => collectionFile),
  } as CmsCollection;
}

export function collectionFile({
  label,
  file,
}: {
  label: string;
  file: string;
}) {
  return {
    fields<Items extends CmsFieldItems<Items>>(
      getItems: (data: typeof fieldsObject) => Items
    ) {
      const items = getItems(fieldsObject);
      const fields = itemsToCmsFields(items);

      const collectionFile: CmsCollectionFile = {
        name: slugify(label),
        label,
        file,
        fields,
      };

      return { items, collectionFile };
    },
  };
}

export function collectionFolder({
  label,
  labelSingular,
  folder,
  slug,
  sortableFields = [],
}: {
  label: string;
  labelSingular: string;
  folder: string;
  slug: string;
  sortableFields?: string[];
}) {
  return {
    fields<Items extends CmsFieldItems<Items>>(
      getItems: (data: typeof fieldsObject) => Items
    ) {
      const items = getItems(fieldsObject);
      const fields = itemsToCmsFields(items);

      const collection: CmsCollection = {
        name: slugify(label),
        label,
        label_singular: labelSingular,
        sortable_fields: sortableFields,
        folder: folder,
        create: true,
        format: "json",
        fields: fields,
        slug,
      };

      return { items, collection };
    },
  };
}
