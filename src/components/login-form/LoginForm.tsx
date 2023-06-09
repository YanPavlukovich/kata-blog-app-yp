import { ReactNode, useEffect } from "react";
import {
  DeepPartial,
  FieldValues,
  useForm,
  ValidationMode,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { ObjectSchema, Maybe, AnyObject } from "yup";
import { Input } from "../input/Input";
import { Checkbox } from "../checkbox/Checkbox";
import { useLoginFormStyles } from "./useLoginFormStyles";

export type FieldType = {
  label: string;
  name: string;
  value?: string;
};

type Props<T extends Maybe<AnyObject>> = {
  submitHandler: (formData: T) => void;
  title: string;
  buttonText: string;
  validationSchema: ObjectSchema<T>;
  fieldsData: FieldType[];
  needDataAgree?: boolean;
  helpText?: ReactNode;
  errors?: {
    [key: string]: any;
  };
  defaultValues?: DeepPartial<T>;
  mode?: keyof ValidationMode;
};

export const LoginForm = <T extends FieldValues>(props: Props<T>) => {
	const loginFormStyle = useLoginFormStyles();
  const {
    submitHandler,
    title,
    buttonText,
    validationSchema,
    fieldsData,
    needDataAgree,
    helpText,
    errors: propErrors,
    defaultValues,
    mode,
  } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<T>({
    mode: mode || "onChange",
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
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

  const fields = fieldsData.map(({ name, label }, i) => {
    const error = (errors[name]?.message || "") as string;

    return (
      <Input
        key={`${name}_${i}`}
        name={name}
        register={register}
        label={label}
        error={error}
      />
    );
  });

  return (
    <div className={loginFormStyle.root}>
      <h2 className={loginFormStyle.formTitle}>{title}</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        {fields}
        {needDataAgree && (
          <Checkbox
            label={"I agree to the processing of my personal information"}
            register={register}
            error={(errors.personal?.message || null) as string}
            name={"personal"}
          />
        )}
        <button type={"submit"} className={loginFormStyle.formSubmit}>
          {buttonText}
        </button>
      </form>
      <p className={loginFormStyle.helpText}>{helpText ? helpText : null}</p>
    </div>
  );
};
