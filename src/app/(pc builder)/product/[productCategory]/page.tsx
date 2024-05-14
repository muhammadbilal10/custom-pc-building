import PcComponetCard from "@/components/PC/PcComponetCard";
import BreadCrumb from "@/components/layout/BreadCrumb";
import PcComponentFilter from "@/components/layout/PcComponentFilter";

async function getProductData(productCategory: string) {
  const products = [
    {
      id: 1,
      name: "AMD Ryzen 7 7800X Processor",
      brand: "AMD",
      image:
        "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400",
      price: 429.99,
      productBuyLink: "https://www.example.com/amd-ryzen-7-7800x",
      reviews: 125,
      specs: {
        cores: 8,
        threads: 16,
        socket: "AM5",
        baseClock: "3.9 GHz",
        boostClock: "5.1 GHz",
        cache: "36MB L3 Cache",
        tdp: "105W",
      },
    },
    {
      id: 2,
      name: "Intel Core i5-13600K Processor",
      brand: "Intel",
      image:
        "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400",
      price: 379.99,
      productBuyLink: "https://www.example.com/intel-core-i5-13600k",
      rating: 4.2,
      reviews: 872,
      specs: {
        cores: "14 (6 P-Cores + 8 E-Cores)",
        threads: 20,
        socket: "LGA 1700",
        baseClock: "3.5 GHz (P-Cores), 3.3 GHz (E-Cores)",
        boostClock: "5.1 GHz (P-Cores), 3.9 GHz (E-Cores)",
        cache: "24MB L3 Cache",
        tdp: "125W",
      },
    },
    {
      id: 3,
      name: "AMD Ryzen 9 7900X Processor",
      brand: "AMD",
      image:
        "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400",
      price: 599.99,
      productBuyLink: "https://www.example.com/amd-ryzen-9-7900x",
      rating: 4.7,
      reviews: 125,
      specs: {
        cores: 12,
        threads: 24,
        socket: "AM5",
        baseClock: "3.5 GHz",
        boostClock: "5.1 GHz",
        cache: "64MB L3 Cache",
        tdp: "105W",
      },
    },
    {
      id: 4,
      name: "Intel Core i9-13900K Processor",
      brand: "Intel",
      image:
        "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400",
      price: 799.99,
      productBuyLink: "https://www.example.com/intel-core-i9-13900k",
      rating: 4.9,
      reviews: 872,
      specs: {
        cores: "16 (8 P-Cores + 8 E-Cores)",
        threads: 24,
        socket: "LGA 1700",
        baseClock: "3.5 GHz (P-Cores), 3.3 GHz (E-Cores)",
        boostClock: "5.1 GHz (P-Cores), 3.9 GHz (E-Cores)",
        cache: "30MB L3 Cache",
        tdp: "125W",
      },
    },
    {
      id: 5,
      name: "AMD Ryzen 5 7600X Processor",
      brand: "AMD",
      image:
        "https://nzxt.com/assets/cms/34299/1664351911-n7-b650e-white-hero.png?ar64=MTox&auto=format&dpr=2&fit=crop&h=400&w=400",
      price: 329.99,
      productBuyLink: "https://www.example.com/amd-ryzen-5-7600x",
      rating: 4.5,
      reviews: 125,
      specs: {
        cores: 6,
        threads: 12,
        socket: "AM5",
        baseClock: "3.5 GHz",
        boostClock: "5.1 GHz",
        cache: "24MB L3 Cache",
        tdp: "105W",
      },
    },
  ];

  return products;
}

export default async function ProductPage({
  params,
}: {
  params: { productCategory: string };
}) {
  console.log(params.productCategory);
  const productCategory = params.productCategory;
  const productData = await getProductData(productCategory);

  return (
    <div className="pt-4">
      <div className="bg-gray-100 py-4">
        <BreadCrumb
          breadcrumbList={[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "Products",
              link: "/product/list",
            },
            {
              text: productCategory,
              link: `/product/${productCategory}`,
            },
          ]}
        />
      </div>

      <div className=" px-3 xl:max-w-[1400px] mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
        <h1 className="text-4xl font-bold  pt-10 mb-4">
          Select Your{" "}
          {productCategory[0].toUpperCase() + productCategory.slice(1)}
        </h1>
        <div className="sticky top-[63px] z-20">
          <PcComponentFilter />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {productData.map((product) => (
            <PcComponetCard
              key={product.id}
              title={product.name}
              os={product.brand}
              specs={[
                `Cores: ${product.specs.cores}`,
                `Threads: ${product.specs.threads}`,
                `Base Clock: ${product.specs.baseClock}`,
                `Boost Clock: ${product.specs.boostClock}`,
                `Cache: ${product.specs.cache}`,
                `TDP: ${product.specs.tdp}`,
              ]}
              reviews={product.reviews}
              ratingStars={product.rating as number}
              imageUrl={product.image}
              buyLink={product.productBuyLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
