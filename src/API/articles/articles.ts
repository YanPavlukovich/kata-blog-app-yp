import { getResourse } from "../core";
import { CreateArticleType, DeleteArticleType, GetArticlesType, GetArticleType, UpdateArticleType } from "./articles-types";

export const getArticles: GetArticlesType = async (limit, offset, token) => {
	const response = await getResourse(`arcticles?limit=${limit}&offset=${offset}`, {method: 'GET'}, token);

	return response.data;
};

export const getArticle: GetArticleType = async (slug, token) => {
  const response = await getResourse(`articles/${slug}`, { method: 'GET' }, token);

  return response.data;
};

export const createArticle: CreateArticleType = async (data, token) => {
	const response = await getResourse(
		`arcticles/`,
		{
			method: 'POST',
			data: {
				article: data,
			},
		},
		token
	);

	return response.data;
};

export const deleteArticle: DeleteArticleType = async (slug, token) => {
	return await getResourse(
		`arcticles/${slug}`,
		{
			method: 'DELETE',
		},
		token
	);
};

export const updateArticle: UpdateArticleType = async (slug, token, data) => {
	const response = await getResourse(
		`arcticles/${slug}`,
		{
			method: 'PUT',
			data: {article: data},
		},
		token
	);

	return response.data;
};
