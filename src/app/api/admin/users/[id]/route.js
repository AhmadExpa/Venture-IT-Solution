import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // adjust path to your NextAuth config

// Update user
export async function PUT(request, context) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const session = await getServerSession(authOptions);
    console.log("SESSION:", session);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { email, password, currentPassword, role } = await request.json();
    const user = await User.findById(id).select("+password");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    if (email) user.email = email;

    if (password) {
      if (!currentPassword) {
        return NextResponse.json({ error: "Current password is required" }, { status: 400 });
      }
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 });
      }
      user.password = await bcrypt.hash(password, 10);
    }

    if (role && session.user.role === "admin") {
      user.role = role;
    }

    await user.save();
    const updatedUser = user.toObject();
    delete updatedUser.password;

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Get user
export async function GET(request, context) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findById(id).select("-password");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Delete user
export async function DELETE(request, context) {
  await dbConnect();

  try {
    const { id } = await context.params;
    const session = await getServerSession(authOptions);
    console.log("SESSION:", session);

    if (!session?.user || session.user.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (session.user.id === id) {
      return NextResponse.json({ error: "Cannot delete your own account" }, { status: 400 });
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
