import { createClient } from "./client";

export async function getUserRole() {
	const supabase = createClient();

	const {data: {session}} = await supabase.auth.getSession();
	if (!session)  return null;

	const {data, error} = await supabase
		.from("profiles")
		.select("role")
		.eq("uid", session.user.id)
		.single();
	
	if (error) {
		console.error("getUserRole error", error.message);
		return null;
	}

	return data.role;
}