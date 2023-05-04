export type PostAuthorizationType = {
	username: string;
	image?: string;
	following?: string;
}

export type PostType = {
	slug: string;
	title: string;
	description: string;
	body: string;
	createAt: string;
	updateAt: string;
	taglist: string[];
	favorited: boolean;
	favoritesCount: number;
	author: PostAuthorizationType;
}

export type PostsResponseType = {
	articles: PostType[];
	articlesCount: number;
}

export type PostResponseType = {
	article: PostType;
}
