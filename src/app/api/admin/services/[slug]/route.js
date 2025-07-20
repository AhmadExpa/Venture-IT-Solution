import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Service from "@/models/Service";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req, context) {
  await dbConnect();
  const { slug } = await context.params;

  try {
    const service = await Service.findOne({ slug });
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }
    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req, context) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const { slug } = await context.params;

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const updatedService = await Service.findOneAndUpdate({ slug }, data, {
      new: true,
    });
    return NextResponse.json(updatedService, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req, context) {
  await dbConnect();
  const session = await getServerSession(authOptions);
  const { slug } = await context.params;

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await Service.findOneAndDelete({ slug });
    return NextResponse.json({ message: "Service deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
