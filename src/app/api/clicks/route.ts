import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

type ClickDoc = {
  _id: string;
  count: number;
};

async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

export async function GET() {
  const collection = await getClicksCollection();
  const docs = await collection.find({}).toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json(counts);
}

export async function POST(request: Request) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId is required" }, { status: 400 });
  }

  const collection = await getClicksCollection();
  const result = await collection.findOneAndUpdate(
    { _id: linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
