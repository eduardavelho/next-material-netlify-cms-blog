import type { CmsField } from "netlify-cms-core";

export type {
  CmsField,
  CmsCollectionFile,
  CmsCollection,
} from "netlify-cms-core";

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
