import type { CmsField } from "netlify-cms-core";

export type {
  CmsField,
  CmsCollectionFile,
  CmsCollection,
} from "netlify-cms-core";

declare const UniqueFile: unique symbol;

declare const UniqueFolder: unique symbol;

export type Data<DataType> = {
  id: number;
  slug: string;
  data: DataType;
};

export type SortFunction<DataType> = (
  left: Data<DataType>,
  right: Data<DataType>
) => number;

export type CollectionFile = string & { readonly [UniqueFile]: "Path" };

export type CollectionFolder = string & { readonly [UniqueFolder]: "Path" };

export type FieldArguments = "required" | "optional" | "withDefault";

export type GetCmsFieldArguments<
  Type,
  Arguments extends FieldArguments
> = Arguments extends "optional"
  ? { label: string; required: false; defaultValue?: undefined }
  : Arguments extends "withDefault"
  ? { label: string; required?: true; defaultValue: Type }
  : {
      label: string;
      required?: true;
      defaultValue?: undefined;
    };

export type GetCmsField<Type, Arguments extends FieldArguments> = () => (
  name: string
) => CmsField;

export type InferFieldType<Type> = Type extends GetCmsField<infer Type, any>
  ? Type
  : never;

export type InferFieldArguments<Arguments> = Arguments extends GetCmsField<
  any,
  infer Arguments
>
  ? Arguments
  : never;

export type CmsFieldItems<Fields> = {
  [key in keyof Fields]: GetCmsField<
    InferFieldType<Fields[key]>,
    InferFieldArguments<Fields[key]>
  >;
};

export type CmsFieldObject = {
  [key: string]: GetCmsField<any, "required">;
};

export type CmsFieldObjectNotEmpty<
  Items extends CmsFieldObject
> = keyof Items extends never ? never : Items;

export type InferCmsFieldItems<Items extends CmsFieldItems<Items>> = {
  [key in keyof Pick<
    Items,
    {
      [key in keyof Items]: InferFieldArguments<Items[key]> extends "optional"
        ? key
        : never;
    }[keyof Items]
  >]?: InferFieldType<Items[key]>;
} &
  {
    [key in keyof Pick<
      Items,
      {
        [key in keyof Items]: InferFieldArguments<Items[key]> extends "optional"
          ? never
          : key;
      }[keyof Items]
    >]: InferFieldType<Items[key]>;
  };

export type GetCollectionType<
  Collection extends {
    items: CmsFieldItems<Collection["items"]>;
  }
> = InferCmsFieldItems<Collection["items"]>;
