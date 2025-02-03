export interface Product {
    _id: string;
    title: string;
    productImage: {
        asset: {
            _ref: string;
            _type: "image";
        }
    };
    price: number;
    description?: string;
    discountPercentage: number;

    slug: {
        _type: "slug";
        current: string;
    };
    inventory: number;
}