import ProductList from "../components/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;

  return (
    <div className="">
      <ProductList params="products" category={category} />
    </div>
  );
};

export default ProductsPage;
