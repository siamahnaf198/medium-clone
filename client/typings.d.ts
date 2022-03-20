export interface News {
    _id: string;
    _createdAt: string;
    author: {
        name: string;
        image: string;
    },
    title: string,
    description: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
    slug: {
        current: string
    };
    body: [object];
}