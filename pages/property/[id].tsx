import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import Layout from "@/components/layout/Layout";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Property not found</p>
      </div>
    </Layout>
  );

  return (
    <Layout>
      <PropertyDetail property={property} />
    </Layout>
  );
}
