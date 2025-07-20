import dbConnect from "@/lib/dbConnect";
import Service from "@/models/Service";

export async function GET() {
  await dbConnect();
  try {
    const services = await Service.find({});
    return new Response(JSON.stringify(services), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
