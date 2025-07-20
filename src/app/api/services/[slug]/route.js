import dbConnect from "@/lib/dbConnect";
import Service from "@/models/Service";

export async function GET(req, context) {
  await dbConnect();
  const { slug } = await context.params;
  try {
    const service = await Service.findOne({ slug: slug });
    if (!service) {
      return new Response(JSON.stringify({ error: "Service not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify(service), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
