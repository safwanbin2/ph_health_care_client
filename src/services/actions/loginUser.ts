"use server";

export const loginUser = async (values: {
  email: string;
  password: string;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
