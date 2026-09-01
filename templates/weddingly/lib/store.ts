import fs from "node:fs/promises";
import path from "node:path";

export type WishRecord = {
  _id: string;
  name: string;
  attendance: string;
  guests: number;
  message: string;
  createdAt: string;
};

const uri = process.env.MONGODB_URI?.trim();
const useMongo = Boolean(uri && uri.startsWith("mongodb"));

const FILE = path.resolve(process.cwd(), ".data", "wishes.json");

async function readFileStore(): Promise<WishRecord[]> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf-8")) as WishRecord[];
  } catch {
    return [];
  }
}

async function writeFileStore(items: WishRecord[]): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(items, null, 2), "utf-8");
}

export async function addWish(
  input: Omit<WishRecord, "_id" | "createdAt">
): Promise<void> {
  if (useMongo) {
    const [{ default: connectToDatabase }, { default: Wish }] = await Promise.all([
      import("./db"),
      import("./models/Wish"),
    ]);
    await connectToDatabase();
    await Wish.create(input);
    return;
  }

  const items = await readFileStore();
  items.unshift({
    ...input,
    _id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  });
  await writeFileStore(items);
}

export async function listWishes(
  page: number,
  limit: number
): Promise<{ wishes: WishRecord[]; totalPages: number; currentPage: number }> {
  if (useMongo) {
    const [{ default: connectToDatabase }, { default: Wish }] = await Promise.all([
      import("./db"),
      import("./models/Wish"),
    ]);
    await connectToDatabase();
    const wishes = await Wish.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    const total = await Wish.countDocuments();
    return {
      wishes: wishes as unknown as WishRecord[],
      totalPages: Math.max(1, Math.ceil(total / limit)),
      currentPage: page,
    };
  }

  const items = await readFileStore();
  return {
    wishes: items.slice((page - 1) * limit, page * limit),
    totalPages: Math.max(1, Math.ceil(items.length / limit)),
    currentPage: page,
  };
}
