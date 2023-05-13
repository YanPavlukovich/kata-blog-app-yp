import { useEffect } from "react";
import { DeepPartial, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { Input } from "../input/Input";
import { FormValues, articleFormValidation } from "./ArticleFormValidation";
import { ArticleFormTags } from "./ArticleFormTags";
import { useArticleFormStyles } from "./useArticleFormStyles";

type Props = {
  title: string;
  submitHandler: (data: FormValues) => void;
  errors?: {
    [key: string]: string;
  };
  defaultValues?: DeepPartial<FormValues>;
};

export const ArticleForm = (props: Props) => {
  const { title, submitHandler, errors: propErrors, defaultValues } = props;
  const articleFormStyle = useArticleFormStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(articleFormValidation),
    defaultValues,
  });

  useEffect(() => {
    if (propErrors) {
      const errorNames = Object.keys(propErrors);

      errorNames.forEach((key) => {
        // @ts-ignore
        setError(key, { type: "custom", message: propErrors[key] });
      });
    }
  }, [propErrors]);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <div className={articleFormStyle.root}>
      <h2 className={articleFormStyle.title}>{title}</h2>

      <form onSubmit={handleSubmit(submitHandler)}>
        <Input
          name={"articleTitle"}
          register={register}
          label={"Title"}
          error={errors.articleTitle?.message as string}
        />
        <Input
          name={"description"}
          register={register}
          label={"Short description"}
          error={errors.description?.message as string}
        />
        <Input
          name={"text"}
          register={register}
          label={"Text"}
          type={"textarea"}
          error={errors.text?.message as string}
        />
        <ArticleFormTags
          control={control}
          register={register}
          errors={errors}
          tagError={errors?.tags?.message as string}
        />
        <button type={"submit"} className={articleFormStyle.fontSubmit}>
          Send
        </button>
      </form>
    </div>
  );
};
