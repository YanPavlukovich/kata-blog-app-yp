import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { FormValues } from "./ArticleFormValidation";
import { Input } from "../input/Input";
import { Button } from "@material-ui/core";
import { useArticleFormTagsStyles } from "./useArticleFormStyles";

type Props = {
  control: Control<FormValues>;
  register: any;
  errors: any;
  tagError: string;
};

export const ArticleFormTags = (props: Props) => {
  const { control, register, errors, tagError } = props;
  const { fields, append, remove } = useFieldArray({
    name: "tags",
    control,
  });
  const articleFormTagsStyle = useArticleFormTagsStyles({
    hasTags: !!fields.length,
  });

  const tags = fields.map((field, i) => {
    return (
      <div className={articleFormTagsStyle.tagWrapper} key={field.id}>
        <Input
          placeholder={"Tag"}
          register={register}
          name={`tags.${i}.name`}
          error={errors?.tags?.[i]?.name?.message as string}
        />
        <Button
          style={{ marginTop: "17px", textTransform: "capitalize" }}
          size="medium"
          variant="outlined"
          color="secondary"
          onClick={() => remove(i)}
        >
          Delete
        </Button>
      </div>
    );
  });

  const addTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    append({
      name: "",
    });
  };

  return (
    <div>
      <div className={articleFormTagsStyle.tagContainer}>
        <label className={articleFormTagsStyle.label}>Tags</label>
        <div className={articleFormTagsStyle.tags}>{tags}</div>
      </div>
      <div>
        <Button
          className={articleFormTagsStyle.addButtonWrapper}
          variant="outlined"
          onClick={addTag}
        >
          Add tag
        </Button>
      </div>
      {tagError && (
        <span className={articleFormTagsStyle.error}>{tagError}</span>
      )}
    </div>
  );
};
