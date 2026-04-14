export interface ServiceFeature {
  title: string;
  description: string;
}
// Agregamos las propiedades de nuestros servicios para mayor flexibilidad al momento de manejarlos en nuestra pagina.
export interface ServiceItem {
  id: number;
  slug: string;
  category: string;
  badge: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  priceSuffix: string;
  imageUrl: string;
  imageAlt: string;
  detailMainImage: string;
  detailSideTopImage: string;
  detailSideBottomImage: string;
  featured: boolean;
  featuredLayout: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  features: ServiceFeature[];
}