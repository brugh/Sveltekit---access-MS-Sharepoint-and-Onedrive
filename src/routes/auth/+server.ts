import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  throw redirect(302, '/'); // only getting here cause we act as SPA for AzureAD
};