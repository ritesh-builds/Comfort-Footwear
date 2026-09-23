import axios from "axios";

export const fetchProducts = async (category = "all") => {
  try {
    if (category === "men") {
      const res = await axios.get("https://dummyjson.com/products/category/mens-shoes");
      return normalizeProducts(res.data.products || []);
    }
    
    if (category === "women") {
      const res = await axios.get("https://dummyjson.com/products/category/womens-shoes");
      return normalizeProducts(res.data.products || []);
    }

    // "all": Fetch both men's and women's shoes for full catalog
    const [menRes, womenRes] = await Promise.all([
      axios.get("https://dummyjson.com/products/category/mens-shoes"),
      axios.get("https://dummyjson.com/products/category/womens-shoes"),
    ]);

    const combined = [...(menRes.data.products || []), ...(womenRes.data.products || [])];
    return normalizeProducts(combined);
  } catch (error) {
    console.error("Failed to fetch products from external API:", error);
    return [];
  }
};

const normalizeProducts = (items) => {
  return items.map((item) => ({
    id: item.id,
    name: item.title,
    type: item.brand ? `${item.brand} • ${item.category.replace("-", " ")}` : "Everyday Footwear",
    category: item.category,
    price: `₹${Math.round(item.price * 80)}`,
    rawPrice: item.price,
    image: item.thumbnail || item.images?.[0] || "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: item.description,
    rating: item.rating,
    brand: item.brand,
  }));
};
