export interface Product {
  id: string;
  nameKey: string;
  descKey: string;
  price: number;
  inStock: boolean;
  tags: string[];
  image: string;
  typeKey: string;
}

export const getProducts = (): Product[] => [  // Removed (t: TFunction) parameter
  {
    id: '1',
    nameKey: 'products.items.1.name',
    descKey: 'products.items.1.desc',
    price: 5.99,
    inStock: true,
    tags: ['organic', 'antioxidant'],
    image: 'https://placehold.co/300x200?text=Green+Tea&font=montserrat',
    typeKey: 'products.type1',
  },
  {
    id: '2',
    nameKey: 'products.items.2.name',
    descKey: 'products.items.2.desc',
    price: 4.99,
    inStock: false,
    tags: ['relaxing', 'herbal'],
    image: 'https://placehold.co/300x200?text=Chamomile+Tea&font=montserrat',
    typeKey: 'products.type1',
  },
  {
    id: '3',
    nameKey: 'products.items.3.name',
    descKey: 'products.items.3.desc',
    price: 12.99,
    inStock: true,
    tags: ['aromatherapy', 'calming'],
    image: 'https://placehold.co/300x200?text=Lavender+Oil&font=montserrat',
    typeKey: 'products.type2',
  },
  {
    id: '4',
    nameKey: 'products.items.4.name',
    descKey: 'products.items.4.desc',
    price: 10.99,
    inStock: true,
    tags: ['refreshing', 'digestive'],
    image: 'https://placehold.co/300x200?text=Peppermint+Oil&font=montserrat',
    typeKey: 'products.type2',
  },
  {
    id: '5',
    nameKey: 'products.items.5.name',
    descKey: 'products.items.5.desc',
    price: 15.99,
    inStock: false,
    tags: ['moisturizing', 'natural'],
    image: 'https://placehold.co/300x200?text=Aloe+Vera+Cream&font=montserrat',
    typeKey: 'products.type3',
  },
  {
    id: '6',
    nameKey: 'products.items.6.name',
    descKey: 'products.items.6.desc',
    price: 19.99,
    inStock: true,
    tags: ['anti-aging', 'vitamin-rich'],
    image: 'https://placehold.co/300x200?text=Rosehip+Serum&font=montserrat',
    typeKey: 'products.type3',
  },
];