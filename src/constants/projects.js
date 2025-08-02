import { databases } from "../appwrite";

export async function getProjects() {
  console.log("ENV Vars:", {
    project: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    db: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    collection: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  });
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      import.meta.env.VITE_APPWRITE_COLLECTION_ID
    );

    return response.documents;
  } catch (error) {
    console.error("Appwrite error:", error.message);
    return [];
  }
}
