import slug from "slug";
import {
  CmsCollectionFile,
  CmsField,
  CmsCollection,
  CmsFieldSelect,
  CmsFieldFileOrImage,
  CmsFieldList,
} from "netlify-cms-core";

export function files({
  label,
  files,
  options = {},
}: {
  label: string;
  files: CmsCollectionFile[];
  options?: Partial<CmsCollection>;
}) {
  return {
    ...options,
    name: slug(label),
    label,
    format: "json",
    files,
  } as CmsCollection;
}

export function file({
  label,
  file,
  fields,
  options = {},
}: {
  label: string;
  file: string;
  fields: CmsField[];
  options?: Partial<CmsCollectionFile>;
}) {
  return {
    ...options,
    name: slug(label),
    label,
    file,
    fields,
  } as CmsCollectionFile;
}

export function folder({
  label,
  label_singular,
  folder,
  fields,
  options,
}: {
  label: string;
  label_singular: string;
  folder: string;
  fields: CmsField[];
  options: Partial<CmsCollection>;
}) {
  return {
    ...options,
    name: label ? slug(label) : name,
    label: label,
    label_singular: label_singular,
    folder: folder,
    create: true,
    format: "json",
    fields: fields,
  } as CmsCollection;
}

export function string({
  name,
  label,
  required,
}: {
  name: string;
  label: string;
  required: boolean;
}): CmsField {
  return {
    label,
    required,
    name,
    widget: "string",
  };
}

export function text({
  name,
  label,
  required,
}: {
  name: string;
  label: string;
  required: boolean;
}): CmsField {
  return {
    label,
    required,
    name,
    widget: "text",
  };
}

export function number({
  name,
  label,
  required,
  min,
  max,
  step,
  valueType,
}: {
  name: string;
  label: string;
  required: boolean;
  min?: number;
  max?: number;
  step?: number;
  valueType: "int" | "float";
}): CmsField {
  return {
    label,
    required,
    name,
    widget: "number",
    min,
    max,
    step,
    value_type: valueType,
  };
}

export function color({
  name,
  label,
  required,
  allowInput,
}: {
  name: string;
  label: string;
  required: boolean;
  allowInput: boolean;
}): CmsField {
  return {
    label,
    required,
    name,
    widget: "color",
    allowInput,
  };
}

export function boolean({
  name,
  label,
  required,
}: {
  name: string;
  label: string;
  required: boolean;
}): CmsField {
  return {
    label,
    required,
    name,
    widget: "boolean",
  };
}

export function select({
  name,
  label,
  required,
  multiple = false,
  options,
  min,
  max,
}: {
  name: string;
  label: string;
  required: boolean;
  multiple?: boolean;
  options: { label: string; value: string }[];
  min?: number;
  max?: number;
}): CmsField & CmsFieldSelect {
  return {
    label,
    required,
    name,
    widget: "select",
    options,
    multiple,
    min,
    max,
  };
}

export function image({
  name,
  label,
  required,
  multiple = false,
}: {
  name: string;
  label: string;
  required: boolean;
  multiple?: boolean;
}): CmsField & CmsFieldFileOrImage {
  return {
    label,
    required,
    name,
    widget: "image",
    allow_multiple: multiple,
  };
}

export function list({
  name,
  label,
  labelSingular,
  fields,
  summary,
  collapsed = false,
}: {
  name: string;
  label: string;
  labelSingular: string;
  fields: CmsField[];
  summary: string;
  collapsed?: boolean;
}): CmsField & CmsFieldList {
  return {
    name,
    label,
    label_singular: labelSingular,
    widget: "list",
    summary: `{{fields.${summary}}}`,
    fields,
    collapsed,
  };
}

export function keywords({
  name,
  label,
  min,
  max,
}: {
  name: string;
  label: string;
  min: number;
  max: number;
}): CmsField {
  return {
    label,
    required: true,
    name,
    widget: "list",
    min,
    max,
    allow_add: false,
  };
}
