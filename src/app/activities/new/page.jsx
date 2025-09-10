import AddActivityForm from "./AddActivityForm";

import { createClient } from "$/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function addActivityForm() {
    const supabase =  await createClient();
    const { data: {session} } = await supabase.auth.getSession();
    console.log("data : " + session);
    
    if (!session) {
      redirect("/login");
    }
  
	return (
    <>
      <AddActivityForm />
    </>
  );
}
